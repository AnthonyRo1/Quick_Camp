'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.DATE // <-- date of check in 
      },
      checkOut: {
        allowNull: false,
        type: Sequelize.DATE // <-- date of check out 
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'} // user id associated with booking
      },
      campsiteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Campsites'} // campsite id associated with booking
      },
      totalCost: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2) // total cost of night stay
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
    return queryInterface.dropTable('Bookings');
  }
};