module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    title: DataTypes.STRING,
    artwork: DataTypes.TEXT,
    rating: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  return Game;
};

