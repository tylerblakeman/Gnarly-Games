DROP DATABASE IF EXISTS gnarly_games;
CREATE DATABASE gnarly_games;

USE gnarly_games;
-- IGDB 
CREATE TABLE game (
  title VARCHAR(50) NOT NULL,
  gameID INTEGER(10) NOT NULL,
  rating VARCHAR(25),
  summary VARCHAR(500),
  storyline VARCHAR(500),
  PRIMARY KEY (gameID)
);

CREATE TABLE game_genre (
  gameID INT NOT NULL,
  genreId INT NOT NULL,
  PRIMARY KEY (gameID)
);

CREATE TABLE genres (
  genreId INT NOT NULL,
  genreName VARCHAR(500),
  PRIMARY KEY (genreId)
);

-- SELECT game.title, game.artworks, game.rating, game.summary, game.storyline, game.website,genre.genreName
-- FROM genre
-- INNER JOIN genres ON genres.genreId=game.genreId;

-- USE gnarly_games;

-- INSERT INTO game (title, artworks, rating, genreId, summary, storyline, website)
-- VALUES (
--   "Super Mario", "img.png", "100", "1", "Supermario is awesome (summary)", "Super Mario Rocks (storyline)", "Here's the game url"
-- );

-- INSERT INTO genre (genreId, genreName)
-- VALUES ("1", "Adventure");
