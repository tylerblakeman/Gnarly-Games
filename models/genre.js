module.exports = function(sequelize, DataTypes) {
  var Genres = sequelize.define("Genres", {
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    genreName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  
  return Genres;
};