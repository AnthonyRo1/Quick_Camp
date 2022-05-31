'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Campsites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50) // <-- name of campsite 
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255) // <-- campsite description
      },
      guestsAllowed: {
        allowNull: false,
        type: Sequelize.INTEGER // <-- number of guests allowed 
      },
      toalRating: { 
        type: Sequelize.INTEGER // <--- campsite rating (will be null at creation time)
      },
      pricePerNight: {
        allowNull: false, 
        type: Sequelize.DECIMAL(6, 2) // <-- campsite's price per night 
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(80) // city 
      },
      state: { 
        allowNull: false,
        type: Sequelize.STRING(80) // state 
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING(255), // <--- campsite image (Must have at least one)
        unique: true,
      },
      image2: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      image3: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      image4: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      image5: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'} // USER ID -- if a user has host: true, then they may post a campsite
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Campsites');
  }
};