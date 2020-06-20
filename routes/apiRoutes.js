var db = require("../models");

module.exports = function(app, passport){
  app.get('/', function(req, res){
    res.render('index.ejs');
  });
 app.get('/login', function(req, res){
  res.render('login.ejs', {message:req.flash("loginMessage")});
 });

 app.post('/login', passport.authenticate('local-login', {
   successRedirect: '/profile',
   failureRedirect: '/login',
   failureFlash: true
 });
 function(req,res){
   if(req.body.remember){
     req.session.cookie.maxAge = 1000 * 6 * 3;
}else{
  req.session.cookie.expires = false;
}
res.redirect('/');
 });
 
 app.get('/signup', function(req, res){
  res.render('signup.ejs', {message:req.flash("signupMessage")});
 });

 app.post('/signup', passport.authenticate('local-signup', {
   successRedirect: '/profile',
   failureRedirect: '/signup',
   failureFlash: true
//  })));
 });

 app.get('/profile', isLoggedIn function(req, res){
  res.render('profile.ejs',{
    user:req.user
  });
 });


 app.get('/logout', function(req, res){
req.logout();
res.redirect('/');
})
};

function isLoggedIn(req, res next){
  if(req.isAuthenticated())
  return next();

  res.redirect('/');
}



module.exports = function(app) {
  // Get all examples
  app.get("/api/game_info", function(req, res) {
    db.Game.findAll({}).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
