CREATE DATABASE coco;
SHOW DATABASES;
CREATE TABLE Customers(CustomerId int, CustomerName varchar(255), ContactName varchar(255), Address varchar(255), City varchar(255), PostalCode int, Country varchar(255) );
USE coco;
SHOW TABLES;
SELECT * FROM Customers;
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('\"Alfreds Futterkiste\"','\"Maria Anders\"','\"Obere Str. 57\"','\"Berlin\"',122096,'Germany');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Ana Trujillo
Emparedados y
helados','Ana Trujillo','Avda. de la
Constitución 2222','Mexico
D.F.',05021,'Mexico');
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Antonio Moreno
Taquería','Antonio Moreno', ' Mataderos 2312', ' Mexico', 05023,' Mexico');
INSERT INTO Customers ( CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES (' Around the Horn',' Thomas Hardy',' 120 Hanover Sq.',' London',12345,' UK');
INSERT INTO Customers ( CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Berglunds snabbkopt' , 'Christina Berglund',' Berguvsvägen 8',' Luleå',95822,' Sweden');
SELECT * FROM Customers;
DELETE FROM Customers;
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE customertable MODIFY CustomerId INT not null PRIMARY KEY AUTO_INCREMENT;