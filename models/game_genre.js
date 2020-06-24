//game id with genres
module.exports = function(sequelize, DataTypes) {
	var game_genre = sequelize.define("game_genre", {
		genreId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		gameId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	return game_genre;
};


