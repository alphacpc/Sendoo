const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.CONNECT_MONGODB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch(err){
        console.log("Erreur de connexion à MongoDB");
        console.log(err);
    }
}

module.exports = connectDB;