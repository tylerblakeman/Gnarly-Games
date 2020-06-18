const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var axios = require('axios')

//creating the key variable using the .env IGDB_KEY=<IGDB_KEY> info
var key = process.env.IGDB_KEY

//first call! 
axios({
  url: "https://api-v3.igdb.com/achievements",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'user-key': key
  },
  data: "fields achievement_icon,category,checksum,created_at,description,external_id,game,language,locked_achievement_icon,name,owners,owners_percentage,rank,slug,tags,updated_at;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });