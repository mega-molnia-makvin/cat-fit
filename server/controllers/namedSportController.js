const { Named_Sport } = require("models");
const ApiError = require("../error/ApiError");
class namedSportController {
  async create(req, res) {
    const { name } = req.body;
    const namedsport = await Named_Sport.create({ name });
    return req.json({ namedsport });
  }
  async getAll(req, res) {}
}
module.exports = new namedSportController();
