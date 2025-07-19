const express = require("express");
const app = express();
const route = express.Router();
require("dotenv").config();
const path = require("path")

const PORT = process.env.PORT;

console.log(PORT);
app.use(express.static(path.join(__dirname, "public")))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", async(req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"))
})



app.listen(PORT, ()=>{
    try {
        console.log(`Server is Running at http://localhost:${PORT}`);
        
    } catch (error) {
        console.log("Server Error:" + error.message);
        process.exit(1)
        
    }
})