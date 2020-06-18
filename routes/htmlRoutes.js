var db = require("../models");
var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  app.get("/saved", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/saved.html"))
  });

  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"))
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

