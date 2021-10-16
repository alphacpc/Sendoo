const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    username:{
        type : String,
        required : true,
        unique : true,
    },
    phone:{
        type : String,
        required : false,
        default: "",
    },
    job:{
        type : String,
        required : false,
        default: "",
    },
    country:{
        type : String,
        required : false,
        default: "",
    },
    fullAdress:{
        type : String,
        required : false,
        default: "",
    },
    email : {
        type : String,
        required : true,
        unique : true,
        index: true
    },
    password : {
        type : String,
        required : true
    },
    profilePic:{
        type : String,
        default : "",
        required: false
    }
},
{ timestamps : true })

module.exports = mongoose.model("User", UserSchema);