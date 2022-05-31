'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campsite = sequelize.define('Campsite', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    guestsAllowed: DataTypes.INTEGER,
    totalRating: DataTypes.INTEGER,
    pricePerNight: DataTypes.DECIMAL,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    image4: DataTypes.STRING,
    image5: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Campsite.associate = function(models) {
    Campsite.hasMany(models.Review, {foreignKey: 'campsiteId'});
    Campsite.hasMany(models.Booking, {foreignKey: 'campsiteId'});
    Campsite.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Campsite;
};

// adding -> (AFTER RATING)
/* 
pricePerNight
city 
state 
imageUrl1 through 5
*/