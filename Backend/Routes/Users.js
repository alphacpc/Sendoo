const router = require("express").Router();
const User = require("../Models/User");
const Post = require("../Models/Post");
const bcrypt = require("bcrypt");


// UPDATE
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id, 
                { $set: req.body},
                {new: true, useFindAndModify: false});

            
            if(!updateUser) res.status(409).json(`L'utilisateur ${req.params.id} n'existe pas !`);
            
            res.status(200).json(updateUser);
            
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("Vous ne pouvez modifier que votre compte !");
    }
});


// SUPPRESSION
router.delete("/:id", async(req, res) => {
    if(req.body.userId === req.params.id){

        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({ postAuthor : user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Utilisateur supprimé avec succès !");
                
            }catch(err){
                res.status(500).json(err);
            }
        }
        catch(err){
            res.status(404).json("User not found !")
        }
    }else{
        res.status(401).json("Vous ne pouvez supprimer que votre compte !");
    }
});


// RECUPERATION
router.get("/:id", async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const { userPw , ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;