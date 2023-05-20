'use strict';
// test
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(
        models.User,
          { foreignKey: 'ownerId' }
      );
      Spot.hasMany(
        models.SpotImage,
        {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
        },
      );
      Spot.hasMany(
        models.Review,
        {
          foreignKey: 'spotId',
          onDelete: 'CASCADE',
        },
      ),
      Spot.hasMany(
        models.Booking,
          { foreignKey: 'spotId' }
      );
    }
  }
  Spot.init({
    ownerId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: {
      type: DataTypes.STRING(50),
      validate: {
        isOver50Chars(name) {
          if (name.length > 50) {
            throw new Error('Name must be less than 50 characters');
          }
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        isAtLeast30Chars(description){
          if (description.length < 30) {
            throw new Error("Description needs a minimum of 30 characters")
          }
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      validate: {
        min: 1,
        isPositiveInt(price) {
          if (price < 0) {
            throw new Error("Price is required")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
