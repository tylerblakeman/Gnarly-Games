//CALLED BY server.js - check there to disable

let path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
let axios = require("axios");
//creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
let key = process.env.IGDB_KEY;
let db = require("../models");
const { response } = require("express");

function getAllGames() {
  for (let i = 0; i < 1; i++){  
	// First call for 100 Games with the gameID,name, and Summary and critic rating.
	axios({
		url: "https://api-v3.igdb.com/games",
		method: "POST",
		headers: {
			Accept: "application/json",
			"user-key": key,
		},
		data:
			`fields id,name,genres,storyline,popularity,summary,screenshots,artworks,cover,aggregated_rating; limit 100; offset ${i*100}; sort popularity desc;`,
	})
		.then((response) => {
			// console.log(response.data);
			// console.log(`ID: ${response.data[0].id}`);
			for (let i = 0; i < response.data.length; i++) {
        //checking if there are genres attached to the game - sending to the getGenre function
        // console.log(response.data[i].genres)
				if (response.data[i].genres) {
					getGenre(response.data[i]);
        }
        //checking if there is cover art for the game - if there is sending to the cover art function
				if (response.data[i].cover) {
					getGamesbyArt(response.data[i]);
				}

				db.Game.create({
					gameId: response.data[i].id,
					title: response.data[i].name,
					rating: response.data[i].aggregated_rating,
					summary: response.data[i].summary,
					storyline: response.data[i].storyline,
				});
      }
      })
      .catch((err) => {
        console.error(err);
      });
    }
}

//getting genres for each game that has at least 1 genre, if it has more than 1 genre will store that in the table as well
function getGenre(x) {
	for (let i = 0; i < x.genres.length; i++) {
		var genreId = x.genres[i];
    var gameId = x.id;
		db.game_genre.create({
			genreId: genreId,
			gameId: gameId,
		}).catch((err) => {
			console.error(err);
		});
	}
}

//getting artwork by each game - function called in main function
function getGamesbyArt(x) {
	// Art work
	axios({
		url: "https://api-v3.igdb.com/covers",
		method: "POST",
		headers: {
			Accept: "application/json",
			"user-key": key,
		},
		data: `fields alpha_channel,animated,checksum,game,height,image_id,url,width;where id=${x.cover};`,
	})
		.then((response) => {
      //response contains image url and game id as game - turning into variable before sending to model
			var imgURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${response.data[0].image_id}.jpg`;
      var gameId = response.data[0].game;
      // console.log(response.data[0].image_id);
			db.art.create({
				gameId: gameId,
				imgURL: imgURL,
			});
		})
		.catch((err) => {
			console.error(err);
		});
};


getGenres();
function getGenres() {
	//call to all genres and their ID's
	axios({
		url: "https://api-v3.igdb.com/genres",
		method: "POST",
		headers: {
			Accept: "application/json",
			"user-key": key,
		},
		data: "fields checksum,name; limit 50;",
	})
		.then((response) => {
      if (response.data[0].name){
			// console.log(response.data);
			// console.log(response.data[0].name);
			for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data[i].id);
        // console.log(response.data[i].name);
				db.genres.create({
					genreId: response.data[i].id,
					genreName: response.data[i].name,
				});
      };
			}
		})
		.catch((err) => {
			console.error(err);
    });
};

module.exports.getAllGames = getAllGames;

