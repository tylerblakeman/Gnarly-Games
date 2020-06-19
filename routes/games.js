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
      "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
  })
    .then((response) => {
      // console.log(response.data);
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
      console.log(response.data);
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