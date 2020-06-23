module.exports = function(sequelize, DataTypes) {
  var Art = sequelize.define("Art", {
    imgId: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  
  return Art;
};