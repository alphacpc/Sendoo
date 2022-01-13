const express = require('express');
const app = express();
const multer = require("multer");
require("dotenv").config();
const mongoose = require('mongoose');
const connectDB = require("./Config/dbConfig");

const authRoute = require("./Routes/Auth");
const usersRoute = require("./Routes/Users");
const postsRoute = require("./Routes/Posts");
const categoriesRoute = require("./Routes/Category");


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


//CONNECT TO MONGODB
connectDB();

//For Share Files
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

// For Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

//Check Connection & Listenning server
mongoose.connection.once('open', ()=>{
    console.log("Connected to MongoDB");
    app.listen("4040",()=> console.log("Mon serveur tourne sur le port 4040"));
});

