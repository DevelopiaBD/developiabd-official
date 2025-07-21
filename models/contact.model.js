const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({

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
    },
    country:{
        type: String,
        require: true
    }
},
{
    timestamps: true
}
);


const contact = mongoose.model("Contact", contactSchema)

module.exports = contact;
