const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const app = express();
const connectDB = require("./config/db");
app.use(express.json());
connectDB();
app.listen(process.env.PORT, () =>
   console.log("Server Up and running port on " + process.env.PORT),
);
