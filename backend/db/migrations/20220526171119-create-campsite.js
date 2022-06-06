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
        type: Sequelize.STRING(350) // <-- campsite description
      },
      guestsAllowed: {
        allowNull: false,
        type: Sequelize.INTEGER // <-- number of guests allowed 
      },
      totalRating: { 
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
        type: Sequelize.STRING(350), // <--- campsite image (Must have at least one)
      },
      image2: {
        type: Sequelize.STRING(350),
      },
      image3: {
        type: Sequelize.STRING(350),
      },
      image4: {
        type: Sequelize.STRING(350),
        
      },
      image5: {
        type: Sequelize.STRING(350),
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'} // USER ID -- if a user has host: true, then they may post a campsite
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
    return queryInterface.dropTable('Campsites');
  }
};