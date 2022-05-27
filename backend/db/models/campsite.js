'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campsite = sequelize.define('Campsite', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    guestsAllowed: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Campsite.associate = function(models) {
    Campsite.hasMany(models.Review, {foreignKey: 'campsiteId'});
    Campsite.hasMany(models.Booking, {foreignKey: 'campsiteId'});
    Campsite.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Campsite;
};
