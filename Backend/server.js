const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require("./Routes/Auth");
const usersRoute = require("./Routes/Users");
const postsRoute = require("./Routes/Posts");
const categoriesRoute = require("./Routes/Category");

const multer = require("multer");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/Sendoo',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //useCreateIndex: true,

    // useCreatendex: true, 
    // useFindAndModify: false, 
    // useNewUrlParser: true, 
    //useUnifiedTopology: true 

}).then(console.log("Connexion avec succès au base de données"))
.catch(error => console.log(error));

const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, "images")
    },
    filename: (req,file, cb) =>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage : storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json('Fichier chargée avec succes !');
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);


app.listen("4040",()=>{
    console.log("Mon serveur tourne sur le port 4040");
})