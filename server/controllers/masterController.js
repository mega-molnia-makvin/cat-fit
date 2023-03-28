const { Master } = require('../models/models');
const { UUIDV4 } = require("sequelize");
const ApiError = require("../error/ApiError");

const uuid = require('uuid')
const path = require('path')


class masterController {

  async create(req, res) {
    try{
    const { name, surname, patronymic, password, telephone } = req.body;
    const {img} =  req.files
    let filename = uuid.v4() + ".jpg"
    img.mv(path.resolve(__dirname, '..', 'static', filename))
    const mast = await Master.create({ name,surname, patronymic, password, telephone });
    return res.json({ mast });
  }
  catch (e){
    nextTick(ApiError.badRequest(e.message))
  }
}
 
  async getAll(req, res) {
    const { name, surname, patronymic } = req.body;
    const master=await Master.findAll()
    return res.json(master)
  }

}
module.exports = new masterController();
