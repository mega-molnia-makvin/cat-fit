const sequelize = require("db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  cardId: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  telephone: { type: DataTypes.INTEGER },
});

const Card = sequelize.define("card", {
  cardId: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
});

const Connection = sequelize.define("connection", {
  cardId: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
  nameSport: { type: DataTypes.STRING },
});

const Master = sequelize.define("master", {
  id: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  telephone: { type: DataTypes.INTEGER },
});

const Named_Sport = sequelize.define("named_sports", {
  id: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  nameSport: { type: DataTypes.STRING },
  numberofVacancies: { type: DataTypes.INTEGER },
});

const Sports = sequelize.define("sports", {
  id: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  sportId: { type: DataTypes.INTEGER, primaryKEY: true, autoIncrement: true },
  firstDate: { type: DataTypes.DATE },
  lastDate: { type: DataTypes.DATE },
  dayofWeek: { type: DataTypes.DATE },
});

Master.hasMany(Sports);
Sports.belongsTo(Master);

Master.hasMany(Named_Sport);
Named_Sport.belongsTo(Master);

Named_Sport.hasMany(Sports);
Sports.belongsTo(Named_Sport);

Named_Sport.hasMany(Connection);
Connection.belongsTo(Named_Sport);

Card.hasMany(User);
User.belongsTo(Card);

Card.hasMany(Connection);
Connection.belongsTo(Card);

module.exports = {
  User,
  Master,
  Sports,
  Named_Sport,
  Connection,
  Card,
};
