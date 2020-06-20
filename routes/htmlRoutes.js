var path = require("path");
var games = require("./games.js");

module.exports = function (app) {
  // Load index page
  // "/", "/?search=title", "/?search=genre"
  app.get("/", function (req, res) {
    console.log(`User hit route: ${req.params}`)
    // var getWhat = req.query.search;
    // if (search === 'title') {
    //   games.getGamesByTitle(function(data) {
    //     res.render("index", {data: data});
    //   })
    // }
    // res.sendFile(path.join(__dirname, "../public/index.html"))

    var getGames = req.query.gameData;
    games.getAllGames(function (data) {
      console.log(data);
      res.render("index", { game: data });
    });

    // getGames(function (data) {
    //   console.log(data);
    // });
  });

  app.get("/saved", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/saved.html"));
  });

  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Redirecting to index.html if another routname is entered
  // app.get("*", function (req, res) {
  //   console.log("User hit wildcard Route")
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
