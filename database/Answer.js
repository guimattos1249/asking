const Sequelize = require('sequelize');
const connection = require('./database');

const Awnser = connection.define('awnsers', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Awnser.sync({force: false});

module.exports = Awnser;