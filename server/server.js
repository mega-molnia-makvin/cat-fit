require('dotenv').config({path:'/home/alina/Desktop/cat-fit/server/.env'});
const express = require("express");

const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./route/main");

const port = process.env.port || 5001;

const app = express();
app.use(cors());
app.use(express.json());


// начало нерабочей зоны
const fileUpload = require("express-fileupload");
const path = require("path");



const errHandling = require("/home/alina/Desktop/cat-fit/server/middleware/errorHandingMiddleware.js");

app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

app.use('/api', router);
//Обработка ошибки
app.use(errHandling);
//конец нерабочей зоны

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log("Server started on port " + port));
  } catch (e) {
    console.log(e);
  }
};

start();
