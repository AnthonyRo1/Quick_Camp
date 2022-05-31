'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30), // <-- username
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256), // <-- email 
        unique: true
      },
      host: {
        allowNull: false,
        type: Sequelize.BOOLEAN, // <-- BOOLEAN - Can the user HOST ? (Default value false)
        defaultValue: false
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY // hashed password 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};