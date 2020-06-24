var db = require("../models");

module.exports = function(app) {
  // Get all games for cards on main page
  app.get("/api/game", function(req, res) {
    db.Game.findAll({}).then(function(Game) {
        res.json(dbPost);
    });
  });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};

