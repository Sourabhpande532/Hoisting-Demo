require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./routes/routes");
const connectToDb = require("./config/dbconn");



/*Middleware*/
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDb();
app.use("/", Router);


module.exports = app;
