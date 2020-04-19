const password = require('../password');
const sequelize = require('sequelize');

const connection = new sequelize('asking', 'root', password, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;