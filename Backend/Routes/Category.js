const router = require("express").Router();
const Category = require("../Models/Category");


//Ajouter une catégorie
router.post("/", async(req, res)=>{
    const newCat = await new Category(req.body);

    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    }
    catch(err){
        res.status(500).json(err);
    }
})


//Récuperer les catégories
router.get("/", async(req, res)=>{
    try{
        const categ = await Category.find();
        res.status(200).json(categ)
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;