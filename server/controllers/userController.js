const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt')
const {User} = require('../models')

const generateJwt = (id, telephone) => {
  return jwt.sign(
    {id, telephone},
    process.env.secretKey,
    {expiresIn: '123h'}
  )
}

class UserController {
  async create(req, res) {
    try{
    const { name, surname, patronymic, password, telephone } = req.body;
    const user = await User.create({ name,surname, patronymic, password, telephone  });
    return req.json({ user });
  }
  catch (e){
    nextTick(ApiError.badRequest(e.message))
  }
}

  async registration(req, res){
    const { name,surname, patronymic, password, telephone } = req.body
    if (!telephone || !password){
      return next(ApiError.badRequest('Некорректный телефон или пароль'))
    }
    const candidate = await User.findOne({where: {telephone}})
    if (candidate){
      return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'))
    }
    const hashPassword = await bcrypt.hash(password,5)
    const user = await User.create(name,surname, patronymic, password, telephone)
    const token = generateJwt(user.id, user.telephone)
    return res.json({token})
  }

  async login(req, res) {
    const { password, telephone } = req.body
    const user = await User.findOne({where: {telephone}})
    if (!user){
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword){
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.telephone)
    return res.json({token})
  }
  async check(req, res, next) {
    const {id} = req.query
    if(!id){
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(query)
  }
}
module.exports = new UserController();
