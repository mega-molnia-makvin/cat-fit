const { Sport } = require('../models/models');
const ApiError = require("../error/ApiError");

class SportController {
  async create(req, res) {
    const { name } = req.body;
    const sport = await Sport.create({ name });
    return req.json({ sport });
  }
  async getAll(req, res) {
    const sport=await Sport.findAll()
    return res.json(sport)
  }
}
module.exports = new SportController();

