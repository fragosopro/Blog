const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog','root','Klivert2000',{
    host: 'localhost',
    dialect: 'mysql'
});