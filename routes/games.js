/*eslint no-var: "error"*/
/*eslint-env es6*/

let path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
let axios = require("axios");
//creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
let key = process.env.IGDB_KEY;
var db = require("../models");

function getAllGames(cb) {
  // First call for 100 Games with name and Summary and critic rating.
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    data:
			"fields id,name,genres,storyline,summary,screenshots,artworks,cover,aggregated_rating; limit 10;",
  })
    .then((response) => {
      console.log(response.data);
      // console.log(`ID: ${response.data[0].id}`);
      for (let i = 0; i < response.data.length; i++) {
        // console.log(`Game name: ${response.data[i].name}`);
        // console.log(`Game summary: ${response.data[i].summary}`);
        // console.log(`Game storyline: ${response.data[i].storyline}`);
        // console.log(
        //   `Game aggregated rating:${response.data[i].aggregated_rating}`
        // );
        // console.log(`Game ID: ${response.data[i].id}`)
        // console.log(response.data[i].cover)
        if (response.data[i].cover){
          getGamesbyArt(response.data[i].cover);
        }
        // getGamesbyArt();
        db.Game.create({
          title: response.data[i].name,
          gameID: response.data[i].id,
          rating: response.data[i].aggregated_rating,
          summary: response.data[i].summary,
          storyline: response.data[i].storyline
        }).then(function(game) {
        })
        // db.Gamegenres
      }
      // console.log("Pulling all games!", response.data);
      // cb(response.data);
      // console.log(response.data.popularity);
      // console.log(`Game popularity: ${response.data.popularity}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

// getGamesByTitle: function getGamesByTitle (cb) {
  //search by Game Title
//   axios({
//     url: "https://api-v3.igdb.com/games/?search=Zelda&fields=id,name;",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "user-key": key
//     }
    // data:
    //   "fields id,name;",
//   })
//     .then(response => {
      // console.log(response.data);
      // console.log(`ID: ${response.data[0].id}`);
      // console.log(`Game name: ${response.data.name}`);
      // console.log(`Game summary: ${response.data.summary}`);
      // // console.log(response.data.popularity);
      // console.log(`Game popularity: ${response.data.popularity}`);
//       cb(response.data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// },
// getGamesByGenre: function (cb) {
//   // Genre
//   axios({
//     url:
//       "https://api-v3.igdb.com/genres/?search=The Witcher 3: Wild Hunt&fields checksum,created_at,name,slug,updated_at,url",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "user-key": key
//     },
//     data: "fields checksum,name;"
//   }).then(response => {
//     // console.log(response.data);
//     // console.log(response.data[0].name);
//     cb(response.data);
//   });
// },
// getGamesById: function (cb) {
//   // search for game by ID assigned by IGDB
//   axios({
//     url: "https://api-v3.igdb.com/games",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "user-key": key
//     },
//     data: "fields *; where id = 1942;"
//   })
//     .then(response => {
//       // console.log(response.data);
//       // console.log(response.data);
//       cb(response.data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// },
function getGamesbyArt(id) {
  // Art work
  axios({
    url: "https://api-v3.igdb.com/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key
    },
    data:
      `fields alpha_channel,animated,checksum,game,height,image_id,url,width;where id=${id};`
      })
    .then(response => {
      console.log(`https://images.igdb.com/igdb/image/upload/t_cover_big/${response.data[0].image_id}.jpg`);

    })
    .catch(err => {
      console.error(err);
    });
  }
// },
// getGamesbyMode: function (cb) {
//   // Game modes
//   axios({
//     url: "https://api-v3.igdb.com/game_modes",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "user-key": key
//     },
//     data: "fields checksum,created_at,name,slug,updated_at,url;"
//   })
//     .then(response => {
//       // console.log(response.data);
//       // console.log(response.data.name);
//       cb(response.data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

module.exports.getAllGames = getAllGames;
