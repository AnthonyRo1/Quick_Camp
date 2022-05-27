'use strict';
const {Validator} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });


// this method wil return an object with only the User instance information that is safe to save to a JWT
  User.prototype.toSafeObject = function() {
    const {id, username, email} = this;
    return {id, username, email};
  };

User.prototype.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword.toString());
}
// takes in an id and returns the user matching that id 
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };


// accepts and object with credential and password keys. 
// Searches for one user with the specified crediential 
// if user is found, then the method should validate the password 
  User.login = async function ({credential, password}) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };



  // accepts an object with username, email, and password key.
  // hash the password and create a User
  User.signup = async function ({username, email, password}) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username, 
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  }

  User.associate = function(models) {
    User.hasMany(models.Booking, {foreignKey: 'userId'});
    User.hasMany(models.Review, {foreignKey: 'userId'});
    User.hasMany(models.Campsite, {foreignKey: 'userId'});
  };
  return User;
};