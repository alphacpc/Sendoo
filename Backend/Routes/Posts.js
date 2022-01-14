const router = require("express").Router();
const Post = require("../Models/Post");

// CREATIONT POST
router.post("/", async (req, res) => {
    
    const newPost = await new Post({
        postTitle : req.body.title,
        postCategory : req.body.categorie,
        postPhoto : req.body.photo,
        postBody: req.body.body,
        postAuthor : req.body.username,
    });

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        console.log("Probleme d'ajout d'un post !");
        res.status(500).json(err);
    }
});



// MODIFICATION POST
router.put("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if( post.postAuthor === req.body.username){
            try{
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    { $set :  req.body},
                    {new: true, useFindAndModify: false}
                );
                res.status(200).json(updatePost);
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("Tu ne peux pas mettre à jour ce post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

// SUPPRESSION POST
router.delete("/:id", async(req, res) => {
    
    try{
        const post = await Post.findById(req.params.id);
        if( post.postAuthor === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post a bien été supprimé...");
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("Tu ne peux pas supprimer ce post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});


// RECUPERATION POST
router.get("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})


// RECUPERER TOUS LES POSTS
router.get("/", async (req, res)=>{
    const username = req.query.user;
    const catName = req.query.category;

    try{
        let posts;
        if(username){
            posts = await Post.find({postAuthor: username})
        }
        else if(catName){
            posts = await Post.find({postCategory:{
                $in : [catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;