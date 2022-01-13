const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    postTitle:{ type : String, required : true, unique : true },
    postBody:{ type : String, required : true },
    postPhoto:{ type : String, required : true },
    postAuthor : { type : String, required : true },
    postCategory : { type : Array, required : false }
    },{ timestamps : true });

module.exports = mongoose.model("Post", PostSchema);