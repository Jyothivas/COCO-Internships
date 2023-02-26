CREATE TABLE Shipping(shippingID INT not null auto_increment, OrderID INT, City varchar(255), Country varchar(100), primary key(shippingID), foreign key(OrderID) references Orders(OrderID) );
INSERT INTO Shipping (OrderID,City, Country)
VALUES (10309,'Mumbai','India');
 SELECT * FROM Shipping;
 INSERT INTO Shipping (OrderID,City, Country)
VALUES (10311, 'Dubai','UAE');
 SELECT * FROM Orders;