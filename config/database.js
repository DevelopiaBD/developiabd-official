const mongoose = require("mongoose");
const User = require("../models/users.model");
require("dotenv").config();


const connectDB = async()=>{
     try {
        await mongoose.connect(process.env.Mongo_db_Url);
        console.log(`MongoDB Connected Successfully}`);

     } catch (error) {
        console.log(error.message);
        process.exit(1)
        
     }
}

module.exports = connectDB;
