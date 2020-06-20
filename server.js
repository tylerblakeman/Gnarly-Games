require("dotenv").config();
var express = require("express");
var session = require('session');
var db = require("./models");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var PORT = process.env.PORT || 3000;

var passport = require('passport');
var flash = require('connect-flash');


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use(session({
//   secret: 'justasecret',
//   resave: true,
//   saveUninstalled: true
// }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set("view engine", "html", 'ejs');


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//
require("./routes/games.js")(app);
require('./config/passport')(passport);

var syncOptions = { force: false };

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
  });
});

module.exports = app;
