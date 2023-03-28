const { Named_Sport } = require('../models/models');
const ApiError = require("../error/ApiError");

class namedSportController {
  async create(req, res) {
    const { name } = req.body;
    const namedsport = await Named_Sport.create({ name });
    return req.json({ namedsport });
  }
  async getAll(req, res) {
    const nameSport=await Named_Sport.findAll()
    return res.json(nameSport)
  }
}
module.exports = new namedSportController();