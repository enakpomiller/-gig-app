 

const { Sequelize } = require('sequelize');

module.exports   = new Sequelize('node_codegig', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });