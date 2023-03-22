const { Card } = require('../models');
const ApiError = require("../error/ApiError");

class CardController {
  async create(req, res) {
    const { name } = req.body;
    const car = await Card.create({ name });
    return req.json({ car });
  }
  async getAll(req, res) {
    const card=await Card.findAll()
    return res.json(card)
  }
}
module.exports = new CardController();
