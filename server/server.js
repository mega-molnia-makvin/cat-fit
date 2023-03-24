require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const port = process.env.port || 5001;
const app = express();


const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

// начало нерабочей зоны
const models = require("C:/Users/фвьшт/Desktop/сайт/cat-fit/server/models.js");
const errHandling = require("middleware/errorHandlingMiddleware");
app.use(cors());
app.use(express.json);
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
const router = require("./route/main");
app.use("api", router);
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
