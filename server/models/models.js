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

const Card_NamedSports = sequelize.define("card_namedsport", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
  // namedSport: { type: DataTypes.STRING },
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

const Named_Sport = sequelize.define("named_sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  numberofVacancies: { type: DataTypes.INTEGER },
});

const Sports = sequelize.define("sports", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  firstTime: { type: DataTypes.TIME },
  lastTime: { type: DataTypes.TIME },
  dayofWeek: { type: DataTypes.STRING },
});

Master.hasMany(Sports);
Sports.belongsTo(Master);

Master.hasMany(Named_Sport);
Named_Sport.belongsTo(Master);

Named_Sport.hasOne(Sports);
Sports.belongsTo(Named_Sport);

Named_Sport.hasMany(Card_NamedSports);
Card_NamedSports.belongsTo(Named_Sport);

Card.hasMany(Card_NamedSports);
Card_NamedSports.belongsTo(Card);

Card.hasOne(User);
User.belongsTo(Card);

module.exports = {
  User,
  Master,
  Sports,
  Named_Sport,
  Card_NamedSports,
  Card,
};
