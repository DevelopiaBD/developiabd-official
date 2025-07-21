const express = require("express");
const  bodyParser = require("body-parser")
const app = express();
const cors = require("cors")
const path = require("path");
require("dotenv").config();

const userRoute = require('./routes/user.route');
const connectDB = require('./config/database');


app.use(cors({
  origin: "https://devofficial.knowledgehut.online",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
}));

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.use("/", userRoute);









// 👇 Only listen in local dev
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}






connectDB()


module.exports = app;
