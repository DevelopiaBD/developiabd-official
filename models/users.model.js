const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    },
    phone:{
        type: Number,
        require: true
    }
},
{
    timestamps: true
}
);


const User = mongoose.model("User", userSchema)

module.exports = User;
