'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Spot, {
        foreignKey: 'spotId'
      })

      Booking.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Booking.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
