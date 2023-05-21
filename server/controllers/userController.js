const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt"); //для хэширования паролей для хранения в бд
const jwt = require("jsonwebtoken");
const { User, Card } = require("../models/models");

const generateJwt = (id, telephone, role) => {
  return jwt.sign({ id, telephone, role }, process.env.secretKey, {
    expiresIn: "24h",
  });
};

class UserController {
  async create(req, res) {
    try {
      const { name, surname, patronymic, password, telephone } = req.body;
      const user = await User.create({ name, surname, patronymic, password, telephone, });
      return req.json({ user });
    } catch (e) {
      nextTick(ApiError.badRequest(e.message));
    }
  }

  async registration(req, res, next) {
    const {name, surname, telephone, password, firstDate, lastDate  } = req.body;
    if (!telephone || !password) {
      return next(ApiError.badRequest("Некорректный телефон или пароль"));
    }
    const candidate = await User.findOne({ where: { telephone } });
    if (candidate) {
      return next(
        ApiError.badRequest(
          "Пользователь с таким номером телефона уже существует"
        )
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      surname,
      patronymic,
      password: hashPassword,
      telephone,
      role
    });

    const card = await Card.create({ firstDate, lastDate, userId: user.id });
    const token = generateJwt(user.id, user.telephone, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { password, telephone } = req.body;
    const user = await User.findOne({ where: { telephone } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password); // сравнение паролей
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.telephone, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.telephone, req.user.role);
    return res.json({token});
  }
}
module.exports = new UserController();
