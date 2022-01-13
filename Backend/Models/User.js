const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userFname : { type : String, required : true },
    userMname : { type : String, required : false , default: ""},
    userLname : { type : String, required : true },
    userName : { type : String, required : true, unique : true },
    userGender : { type : String, required : false , default: ""},
    userPhone : { type : String, required : false, default: "" },
    userJob : { type : String, required : false, default: "" },
    userCountry : { type : String, required : false, default: "" },
    userAdress : { type : String, required : false, default: "" },
    userEmail : { type : String, required : true, unique : true, index: true },
    userPw : { type : String, required : true },
    userPhoto :{ type : String, default : "", required: false }
    }, { timestamps : true })

module.exports = mongoose.model("User", UserSchema);