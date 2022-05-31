'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    campsiteId: DataTypes.INTEGER,
    totalCost: DataTypes.DECIMAL,
    
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Campsite, {foreignKey: 'campsiteId'});
    Booking.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Booking;
};