'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    campsiteId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Campsite, {foreignKey: 'campsiteId'});
  };
  return Review;
};