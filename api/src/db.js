const {Sequelize} = require("sequelize")
require("dotenv").config()

const { DATABASE_URL } = process.env
const sequelize = new Sequelize(DATABASE_URL,{
    logging: false
})

module.exports = sequelize;