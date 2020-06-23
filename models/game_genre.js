module.exports = function(sequelize, DataTypes) {
  var Game_Genre = sequelize.define("Game", {
    genreId: {
      type: DataTypes.Integer,
      allowNull: false
    },
    gameID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Game_Genre;
};