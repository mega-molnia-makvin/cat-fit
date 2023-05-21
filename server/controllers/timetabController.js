const { User, Master, Sports, Named_Sport, Card_Training, Training, Card} = require('../models/models');
const ApiError = require("../error/ApiError");

class timetabController {
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

  async getAll(req, res) {
    const card=await Card.findAll()
    return res.json(card)
  }
}

const users = await User.findAll({
  include: {
    model: Tool,
    as: 'Instruments',
    include: {
      model: Teacher,
      include: [
        /* и т.д. */
      ]
    }
  }
})
console.log(JSON.stringify(users, null, 2))

module.exports = new timetabController ;
