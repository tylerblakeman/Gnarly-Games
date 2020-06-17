DROP DATABASE IF EXISTS gnarly_games;
CREATE DATABASE gnarly_games;

-- CheapShark Table
CREATE TABLE price (
  -- Go back to title.. link IGDB title(?)
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salePrice INT NOT NULL,
  storeId INT NOT NULL,
  storeName VARCHAR(50) NOT NULL,
  dealId INT NOT NULL,
  PRIMARY KEY (id)
);
