const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  telephone: { type: DataTypes.STRING, unique: true },
});

const Card = sequelize.define("card", {
  number: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
});


const Card_Training = sequelize.define("card_training", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Training = sequelize.define("training", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: DataTypes.DATE },
  numberOfPlaces: { type: DataTypes.INTEGER },
  numberOfAvailablePlaces: { type: DataTypes.INTEGER },
});

const Sports = sequelize.define("sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstTime: { type: DataTypes.TIME },
  lastTime: { type: DataTypes.TIME },
  dayofWeek: { type: DataTypes.STRING },
});

const Named_Sport = sequelize.define("named_sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

const Master = sequelize.define("master", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  telephone: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
});

Master.hasMany(Sports);
Sports.belongsTo(Master);

Named_Sport.hasMany(Sports);
Sports.belongsTo(Named_Sport);

Sports.hasMany(Training);
Training.belongsTo(Sports);

User.hasOne(Card);
Card.belongsTo(User);

Card.hasOne(Card_Training);
Card_Training.belongsTo(Card);

Training.hasOne(Card_Training);
Card_Training.belongsTo(Training);

module.exports = {
  User,
  Master,
  Sports,
  Named_Sport,
  Card_Training,
  Training,
  Card,
};
