const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
var axios = require("axios");
//creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
var key = process.env.IGDB_KEY;

module.exports = function (app) {
  //first call for Game name and Summary and critic rating.
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    data:
      "fields id,name,genres,storyline,summary,artworks,popularity,aggregated_rating; limit 100;",
  })
    .then((response) => {
      console.log(response.data);
      console.log(`ID: ${response.data[0].id}`);
      // console.log(`Game name: ${response.data.name}`);
      // console.log(`Game summary: ${response.data.summary}`);
      // // console.log(response.data.popularity);
      // console.log(`Game popularity: ${response.data.popularity}`);
    })
    .catch((err) => {
      console.error(err);
    });

  //search by Game Title
  axios({
    url: "https://api-v3.igdb.com/games/?search=Zelda&fields=id,name;",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    // data:
    //   "fields id,name;",
  })
    .then((response) => {
      // console.log(response.data);
      // console.log(`ID: ${response.data[0].id}`);
      // console.log(`Game name: ${response.data.name}`);
      // console.log(`Game summary: ${response.data.summary}`);
      // // console.log(response.data.popularity);
      // console.log(`Game popularity: ${response.data.popularity}`);
    })
    .catch((err) => {
      console.error(err);
    });


  // Genre name
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    data: "fields *; where id = 1942;",
  })
    .then((response) => {
      // console.log(response.data);
      // console.log(response.data);
    })
    .catch((err) => {
      console.error(err);
    });

  // Art work
  axios({
    url: "https://api-v3.igdb.com/artworks",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    data:
      "fields alpha_channel,animated,checksum,game,height,image_id,url,width;",
  })
    .then((response) => {
      // console.log(response.data);
      // console.log(response.data.url);
    })
    .catch((err) => {
      console.error(err);
    });

  // Game modes
  axios({
    url: "https://api-v3.igdb.com/game_modes",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": key,
    },
    data: "fields checksum,created_at,name,slug,updated_at,url;",
  })
    .then((response) => {
      // console.log(response.data);
      // console.log(response.data.name);
    })
    .catch((err) => {
      console.error(err);
    });
}