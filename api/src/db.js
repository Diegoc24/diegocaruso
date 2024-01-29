const {Sequelize} = require("sequelize")
require("dotenv").config()

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DEPLOYING,
    DB_URI} = process.env

let sequelize
    if(DEPLOYING === "false"){
        sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging: false,
    native: false
})
    }else if(DEPLOYING === "true"){
        sequelize = new Sequelize(`${DB_URI}`,{
    logging: false
})
    }


module.exports = sequelize;