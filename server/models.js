const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKEY:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    patronumic:{type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    cardId:{type:DataTypes.INTEGER, primaryKEY:true, autoIncrement:true},
    telephone:{type:DataTypes.INTEGER},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})

const Card = sequelize.define('card',{
    cardId:{type:DataTypes.INTEGER, primaryKEY:true, autoIncrement:true},
    firstDate:{type:DataTypes.DATE},
    lastDate:{type:DataTypes.DATE}
})

const Master = sequelize.define('master',{
    id: {type:DataTypes.INTEGER, primaryKEY:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    patronumic:{type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    cardId:{type:DataTypes.INTEGER, primaryKEY:true, autoIncrement:true},
    telephone:{type:DataTypes.INTEGER},
    role:{type:DataTypes.STRING, defaultValue:"USER"},
})
