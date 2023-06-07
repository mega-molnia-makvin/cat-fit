const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt"); //для хэширования паролей для хранения в бд
const jwt = require("jsonwebtoken");
const { User, Card,
  Master,
  Sports,
  Named_Sport,
  Card_Training,
  Training,
  } = require("../models/models");
//const getAll =require("./officeController");
const alert = require("alert");


const generateJwt = (id, telephone, role) => {
  return jwt.sign({ id, telephone, role }, process.env.secretKey, {
    expiresIn: "24h",
  });
};

class UserController {
  async create(req, res) {
    try {
      const { name, surname, patronymic, password, telephone, balance } = req.body;
      const user = await User.create({ name, surname, patronymic, password, telephone, });
      return req.json({ user });
    } catch (e) {
      nextTick(ApiError.badRequest(e.message));
    }
  }


  async buy (req, res, next){
    const id = req.session.user;
    const {idSport}=req.body;
    try{
      const user = await User.findOne({where: {id}});
      const card =  await user.getCard();
      const sport = await Sports.findOne({where: {id: idSport}});
      const training = await Training.findOne({where: {sportId: sport.id}});

      if (card.balance<sport.price){        
        res.redirect( "/timetab");
        return next(ApiError.badRequest("Не удалось купить тренировку: недостаточно средств на карте"));
      }

      const isBuy = await Card_Training.findOne({where: {
        cardNumber: card.number,
        trainingId: training.id, 
      }})
      console.log(isBuy);
      if (isBuy){
        res.redirect( "/timetab");
        return next(ApiError.badRequest("Тренировка уже куплена"));
      }
  

      //return next(ApiError.badRequest("Некорректный телефон или пароль"));

      const newBalance = card.balance - sport.price;
      card.update({ balance: newBalance });

       await Card_Training.create({
        cardNumber: card.number,
        trainingId: training.id,
      });
      

      req.session.balance = newBalance;
      res.redirect(`/timetab`);
      return next(alert("Успех"));

    }
    catch (e){
      res.redirect( "/timetab");
      return next(ApiError.badRequest("Не удалось купить тренировку "+e.message));
      //nextTick(ApiError.badRequest(e.message));
    }
  }



  async registration(req, res, next) {
    const {name, surname, telephone, password, firstdate, lastdate, balance  } = req.body;
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
      password: hashPassword,
      telephone,
    });

    const card = await Card.create({ firstDate: firstdate, lastDate: lastdate, userId: user.id, balance });
    const token = generateJwt(user.id, user.telephone, user.role);
    req.session.user = user.id;
    req.session.balance = card.balance;
    res.redirect(`/office`);
   // return res.json({ token });
  }

  async login(req, res, next) {
    const { password, telephone } = req.body;
    const user = await User.findOne({ where: { telephone } });
    if (!user) {
      res.redirect(304, "/office")
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password); // сравнение паролей
    if (!comparePassword) {
      res.redirect(304, "/office")
      return next(ApiError.internal("Указан неверный пароль"));
    }

    const card =  await user.getCard();
    
    const token = generateJwt(user.id, user.telephone, user.role);
    req.session.user = user.id;
    req.session.balance = card.balance;
    res.redirect(`/office`);
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.telephone, req.user.role);
    return res.json({token});
  }
}
module.exports = new UserController();
