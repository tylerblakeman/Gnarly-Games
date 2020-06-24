// let path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
// let axios = require("axios");
// //creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
// let key = process.env.IGDB_KEY;
// let db = require("../models");

// function getGamesbyArt(id) {
//   // Art work
//   axios({
//     url: "https://api-v3.igdb.com/covers",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "user-key": key
//     },
//     data: `fields alpha_channel,animated,checksum,game,height,image_id,url,width;where id=${id};`
//   })
//     .then(response => {
//       db.Art.create({
//         imgId: response.data[0].image_id,
//       });

//       // console.log(`Response: ${response.data}`)
//       console.log(`Game artwork: https://images.igdb.com/igdb/image/upload/t_cover_big/${response.data[0].image_id}.jpg`);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// module.exports.getGamesbyArt = getGamesbyArt;