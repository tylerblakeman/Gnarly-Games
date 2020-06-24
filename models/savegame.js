module.exports = function(sequelize, DataTypes) {
  var SaveGame = sequelize.define("SaveGame", {
    gnarly_id: DataTypes.STRING,
    game_id: DataTypes.STRING
  });
  return SaveGame;
};