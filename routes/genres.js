let path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
let axios = require("axios");
//creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
let key = process.env.IGDB_KEY;
let db = require("../models");


function getGamesByGenre(cb) {
  //call to all genres and their ID's 
  axios({
    url:
      "https://api-v3.igdb.com/genres",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key
    },
    data: "fields checksum,name;"
  })
    .then(response => {
      // console.log(response.data);
      // console.log(response.data[0].name);
      for (let i = 0; i < response.data.length; i++) {
        db.Genres.create({
          genreId: response.data[i].id,
          genreName: response.data[i].name
        })
      }
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports.getGamesByGenre = getGamesByGenre;