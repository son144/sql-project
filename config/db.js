const { Sequelize } = require("sequelize");


const db=new Sequelize("rnw","root","sonal@8368",{
    host: "localhost",
    dialect:'mysql'
})

module.exports =db