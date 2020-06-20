var LocalStrategy = require("passport-local").Strategy;

var mysql = require("mysql");
var bcrypt = require("bcrypt-nodejs");
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport){
    passport.serializUser(fucntion(user, done){
        done(null, user.id);

    });

    passport.deserializUser(function(id, done){
        connection.query("SELECT * FROM users WHERE id = ? ", [id],
        fucntion(err, rows){
            done(err, rows [0]);

        });
    });
    passport.use(
    'local-signup',
    New LocalStrategy({
usernameField:'username',
passwordField:'password',
passReqToCallback:true
    },
    function(req, username, password, done){
        connection.query("SELECT * FROM users WHERE username = ?",
        [username], function(err, rows){
            if(err)
        return done(err);
        if(rows.lenght){
            return done(null, false, req.flash('signupMessage', 'Username taken. Try again'));
        }else{
            var newUserMysql = {
                username: username,
                password: bcrypt.hashSync(password, null, null)
            };
        
        var insertQuery = "INSERT INTO user (username, password) values (?, ?)";

connection.query(insertQuery, [newUserMysql.username, newUserMysql.password],
    function(err, rows){
        newUserMysql.id = rows.insertId;

        return done(null, newUserMysql);
    });
   }
  });
 })
);

passport.use(
    'local-login',
    New LocalStrategy({
        usernameField:'username',
        passwordField:'password',
        passReqToCallback:true
            },
            function(req, username, password, done){
                connection.query("SELECT * FROM users WHERE username = ?",
                [username], function(err, rows){
                    if(err)
                return done(err);
                if(rows.lenght){
                    return done(null, false, req.flash('loginMessage', 'User not found'));
                }
                if(!bcrypt.compareSync(password, rows[0]password))
                return done(null, false, req.flash('loginMessage', 'Wrong password'));
                
               return done(null, rows[0]);
            });
          })
         );
        );
        
}