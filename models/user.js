module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: DataTypes.STRING,
      passcode: DataTypes.STRING
    });
    return User;
  };