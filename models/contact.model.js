const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true
    },
    country:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);


const contact = mongoose.model("Contact", contactSchema)

module.exports = contact;
