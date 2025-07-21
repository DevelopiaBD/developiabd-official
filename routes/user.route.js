const express = require("express");
const router = express.Router()
const User = require("../models/users.model.js");
const {userMessages} = require("../controller/user.controller.js")



router.route("/register").get((req, res)=>{res.send("Yes it is Registration")})
router.route("/contact").post(userMessages);




module.exports = router;