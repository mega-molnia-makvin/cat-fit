require("dotenv").config();
const express = require("express");

const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./route/main");
const errHandling = require("./middleware/errorHandingMiddleware.js");
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session');

const port = process.env.port || 5001;

const app = express();
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static"))); //доступ к папке с картинками 
app.use(express.static(path.resolve(__dirname, "ejs-views")));  //доступ ко всему, что подключается к страницам в ejs


app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); //парсить ввод как json


app.use(
  session({
      secret: process.env.secretKeyOfSession,
      saveUninitialized: true,
  })
);

app.use(fileUpload({}));
app.use("/", router);


app.use(errHandling); //Обработка ошибки в самом конце

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
    app.listen(port, () => console.log("Server started on port " + port));
  } catch (e) {
    console.log(e);
  }
};

start();
