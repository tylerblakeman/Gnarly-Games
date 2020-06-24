// const { INTEGER } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
  var game = sequelize.define("game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gameID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    storyline: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return game;
};

