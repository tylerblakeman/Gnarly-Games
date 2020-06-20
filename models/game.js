module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    title: DataTypes.STRING,
    artwork: DataTypes.TEXT,
    rating: DataTypes.STRING,
    genre: DataTypes.STRING,
    summary: DataTypes.TEXT,
    storyline: DataTypes.TEXT,
    website: DataTypes.TEXT
  });

  return Game;
};
