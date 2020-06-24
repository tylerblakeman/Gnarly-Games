module.exports = function(sequelize, DataTypes) {
	var art = sequelize.define("art", {
		gameId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		imgURL: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	});

	return art;
};
