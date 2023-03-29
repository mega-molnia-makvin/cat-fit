require("dotenv").config();
const express = require("express");

const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./route/main");
const errHandling = require("./middleware/errorHandingMiddleware.js");
const path = require("path");

const port = process.env.port || 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.use(fileUpload({}));
app.use("/api", router);

app.use(errHandling); //Обработка ошибки

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
