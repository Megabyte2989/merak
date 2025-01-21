const { Sequelize} = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const dbConfig  = {
    host: 'localhost',
    username: 'root',
    password: "Mayar2004$$$",
    database: 'newhorizons',
    dialect:'mysql'
}

const sequelize =new Sequelize(dbConfig)

module.exports = sequelize