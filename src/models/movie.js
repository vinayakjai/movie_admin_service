'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Movie.init({
    movie_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certificate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    available: {
      type: DataTypes.ENUM,
      values: ['open', 'not open'],
      allowNull: false,
      defaultValue: 'not open',
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};