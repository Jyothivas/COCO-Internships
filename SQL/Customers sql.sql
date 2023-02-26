CREATE DATABASE business;
SHOW DATABASES;
CREATE TABLE Customers(CustomerID int, CustomerName varchar(255), ContactName varchar(255), Address varchar(255), City varchar(255), PostalCode varchar(255), Country varchar(255) );
USE business;
SHOW TABLES;
SELECT * FROM Customers;
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Alfreds Futterkiste','Maria Anders','Obere Str. 57','Berlin','122096','Germany');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Ana Trujillo
Emparedados y
helados','Ana Trujillo','Avda. de la
Constitución 2222','Mexico
D.F.','05021','Mexico');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Antonio Moreno
Taquería','Antonio Moreno', ' Mataderos 2312', ' Mexico',' 05023',' Mexico');
INSERT INTO Customers ( CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES (' Around the Horn',' Thomas Hardy',' 120 Hanover Sq.',' London',' WA1 1DP',' UK');
INSERT INTO Customers ( CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Berglunds snabbkopt' , 'Christina Berglund',' Berguvsvägen 8',' Luleå',' S-958 22',' Sweden');
SELECT * FROM Customers;
DELETE FROM Customers;
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE Customers MODIFY CustomerID INT not null PRIMARY KEY AUTO_INCREMENT;




