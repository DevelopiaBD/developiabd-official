const Contact = require("../models/contact.model.js")


const userMessages = async(req, res)=>{
    const {name, phone, message, email, country} = req.body;
console.log(name, phone, message, email, country);

    try {
        if(!name || !phone || !message || !email || !country){
            return res.status(400).json({
                message:"All Form Data Required"
            })
        }

        if(!Number(phone)){
            return res.status(400).json({
                message:"Please correct your phone number"
            })
        }
     
        const conatctMsg =  await Contact({
            name, phone, message, email, country
        })

        const savedMessage = await conatctMsg.save();
        res.status(200).json({
            message: "Message sended Successfully",
        })


        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server side error",
        })
    }
}


module.exports = {
    userMessages
}