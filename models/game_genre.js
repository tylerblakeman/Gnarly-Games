module.exports = function(sequelize, DataTypes) {
	var Game_Genre = sequelize.define("Game_Genre", {
		genreId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		gameID: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	return Game_Genre;
};
