DROP DATABASE IF EXISTS gnarly_games;
CREATE DATABASE gnarly_games;

-- IGDB 
CREATE TABLE game (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  artworks VARCHAR(100) NOT NULL,
  rating VARCHAR(25) NOT NULL,
  genreId VARCHAR(25) NOT NULL,
  summary VARCHAR(500),
  storyline VARCHAR(500),
  website Varchar(100),
  PRIMARY KEY (id)
);

CREATE TABLE genre (
  id INT NOT NULL AUTO_INCREMENT,
  genreId INT NOT NULL,
  genreName VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

SELECT game.title, game.artworks, game.rating, game.summary, game.storyline, game.website,genre.genreName
FROM genre
INNER JOIN genre ON genre.genreId=game.genreId;

USE gnarly_games;

INSERT INTO game (title, artworks, rating, genreId, summary, storyline, website)
VALUES (
  "Super Mario", "img.png", "100", "1", "Supermario is awesome (summary)", "Super Mario Rocks (storyline)", "Here's the game url"
);

INSERT INTO genre (genreId, genreName)
VALUES ("1", "Adventure");
