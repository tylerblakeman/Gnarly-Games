//genre ids and their names
module.exports = function(sequelize, DataTypes) {
  var genres = sequelize.define("genres", {
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genreName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  
  return genres;
};