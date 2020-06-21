module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artwork: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    storyline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    websiteUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Game;
};

