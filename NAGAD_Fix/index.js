const express =require("express");
const router = require("./routes/router");
const app=express();
const cors=require("cors");

app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router)

app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}   );