require("dotenv").config;
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const port = 5000;
const module = require("./server/server");
const app = express();
const errHandling = require("./middleware/errorHandlingMiddleware")
app.use(cors());
app.use(express.json);
const router = require("./route/main");
app.use("api", router);
//Обработка ошибки
app.use(errHandling)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log("Server started on port ${port}"));
  } catch (e) {
    console.log(e);
  }
};
