const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('ticketing_portal', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize; 