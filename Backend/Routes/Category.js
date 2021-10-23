const router = require("express").Router();
const Category = require("../Models/Category");
const Post = require("../Models/Post");


//Ajouter une catégorie;
router.post("/", async(req, res)=>{
    const newCat = await new Category(req.body);

    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    }

    catch(err){
        res.status(500).json(err);
    }
});


//Récuperer les catégories;
router.get("/", async(req, res)=>{
    try{
        const categ = await Category.find();
        res.status(200).json(categ)
    }

    catch(err){
        res.status(500).json(err);
    }
});


//Recuperer tous les article pour une categories;
router.get("/category", async (req, res) => {
    const category = req.query.categ;
    
    try{
        let posts;
        if( category ){
            posts = await Post.find({postCategory : { 
                $in : [ category ]
            }});
        }
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;