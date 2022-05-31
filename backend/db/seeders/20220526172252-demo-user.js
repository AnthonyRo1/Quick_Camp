'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.demo',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
        host: true
      },
      {
        email: 'user1@user.com',
        username: "FakeUser1",
        hashedPassword: bcrypt.hashSync('password2'),
        host: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo', 'FakeUser1'] }
    }, {});
  }
};
