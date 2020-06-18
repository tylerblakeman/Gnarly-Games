DROP DATABASE IF EXISTS gnarly_games;
CREATE DATABASE gnarly_games;

-- IGDB 
CREATE TABLE game (
  id INT NOT NULL,
  title VARCHAR(50) NOT NULL,
  artwork VARCHAR(100) NOT NULL,
  gameImages image,
  rating VARCHAR(25) NOT NULL,
  genre VARCHAR(25) NOT NULL,
  trailer VARCHAR(100) NOT NULL,
  reviews VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
