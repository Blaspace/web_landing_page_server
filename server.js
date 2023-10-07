const express = require("express");
const cors = require("cors");
const router = require("./router/allRouter");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

//const uri = process.env.DBUIR;
//const uri = "mongodb://localhost:27017/aiproject";
app.use(
  cors({
    credentials: true,
    //origin: "http://localhost:3000",
    origin: "https://company-cyi0.onrender.com",
  })
);
app.use(cookieParser());
 app.listen(3500, () => console.log(`listening`));
app.use(express.json());
app.use(router);
