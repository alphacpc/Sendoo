const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require('cors');
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
app.use(cors());
app.use("/images", express.static(path.join(__dirname,"/images")))


//CONNECT TO MONGODB
connectDB();

//For Share Files
const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, "images")
    },
    filename: (req,file, cb) =>{
        cb(null, req.body.name);
    }
})

const upload = multer({storage : storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    console.log(req.body,"dans post")
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

