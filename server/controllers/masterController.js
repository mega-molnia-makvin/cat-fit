const { Master } = require("../models/models");
const { UUIDV4 } = require("sequelize");
const ApiError = require("../error/ApiError");

const uuid = require("uuid");
const path = require("path");

class masterController {
  async create(req, res, next) {
    try {
      const { name, surname, patronymic, password, telephone } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", filename)); //перемещение изображения в папку статик
      const mast = await Master.create({
        name,
        surname,
        patronymic,
        password,
        telephone,
        img: filename,
      });
      return res.json(mast);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { name, surname, patronymic } = req.query;
    let masters;
    if (name) {
      masters = await Master.findAll({ where: { name } });
    } else {
      masters = await Master.findAll();
    }

    return res.json(masters);
  }
}
module.exports = new masterController();
