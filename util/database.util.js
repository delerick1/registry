const {Sequelize, DataTypes} = require('sequelize');
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Sonido134545@',
    port: 5432,
    database: 'Registry',
});

module.exports = {db, DataTypes}