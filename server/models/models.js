const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER, unique: true },
});

const Card = sequelize.define("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
});

const Card_NameSports = sequelize.define("card_namesport", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
  nameSport: { type: DataTypes.STRING },
});

const Master = sequelize.define("master", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  telephone: { type: DataTypes.INTEGER },
});

const Name_Sport = sequelize.define("name_sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameSport: { type: DataTypes.STRING },
  numberofVacancies: { type: DataTypes.INTEGER },
});

const Sports = sequelize.define("sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  firstDate: { type: DataTypes.TIME },
  lastDate: { type: DataTypes.TIME },
  dayofWeek: { type: DataTypes.STRING },
});

Master.hasMany(Sports);
Sports.belongsTo(Master);

Master.hasMany(Name_Sport);
Name_Sport.belongsTo(Master);

Name_Sport.hasOne(Sports);
Sports.belongsTo(Name_Sport);

Name_Sport.hasMany(Card_NameSports);
Card_NameSports.belongsTo(Name_Sport);

Card.hasMany(Card_NameSports);
Card_NameSports.belongsTo(Card);

Card.hasOne(User);
User.belongsTo(Card);

module.exports = {
  User,
  Master,
  Sports,
  Name_Sport,
  Card_NameSports,
  Card,
};
