DROP DATABASE IF EXISTS gnarly_games;
CREATE DATABASE gnarly_games;

USE gnarly_games;

CREATE TABLE game (
  gameId INTEGER(10) NOT NULL,
  title VARCHAR(50) NOT NULL,
  rating VARCHAR(25),
  summary VARCHAR(500),
  storyline VARCHAR(500),
  PRIMARY KEY (gameId)
);


CREATE TABLE genres (
  genreId INT NOT NULL,
  genreName VARCHAR(500),
  PRIMARY KEY (genreId)
);


CREATE TABLE game_genre (
  id INTEGER(10) AUTO_INCREMENT,
  genreId INT NOT NULL,
  gameId INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE user (
  userId INTEGER(10) AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  passcode VARCHAR(25) NOT NULL,
  PRIMARY KEY (userId)
);


CREATE TABLE savedGames (
  userId INTEGER(10) AUTO_INCREMENT,
  gameId INTEGER(10) NOT NULL,
  PRIMARY KEY (userId)
);


CREATE TABLE artwork (
  gameId INTEGER(10) NOT NULL,
  imgURL VARCHAR(500) NOT NULL,
  PRIMARY KEY (gameId)
);

--Insert Genre into Game Table
USE gnarly_games;

SELECT game.title, game.artworks, game.rating, game.summary, game.storyline, game.website,genre.genreName
FROM genre
INNER JOIN genres ON genres.genreId=game.genreId;

--Insert Saved Games with User Info
USE gnarly_games;

SELECT user.username, user.passcode
FROM savedGames
INNER JOIN savedGames ON savedGames.userId = user.userID

