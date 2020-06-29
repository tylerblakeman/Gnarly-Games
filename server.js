require("dotenv").config();
var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars.
var exphbs = require("express-handlebars");

//get all games function
// var getAllGames = require('./routes/games')


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//********need this uncommented out in order to use CSS on handlebars//
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

console.log(
  "Starting the server, syncing our models ------------------------------------/"
);
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  })
}).then(function () {
  // getAllGames.getAllGames();
});

module.exports = app;
