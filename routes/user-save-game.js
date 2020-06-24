var db = require("../models");

module.exports = function(app) {
  // Get all games for cards on main page
  app.post("/api/save_game", function(req, res) {
    db.SaveGame.create(req.body).then(function(dbSaveGame) {
      res.json(dbSaveGame);
    });
  });
};