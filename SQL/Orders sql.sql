CREATE TABLE Orders(OrderID INT not null, CustomerID INT, OrderDate DATE, primary key(OrderID), foreign key(CustomerID) references Customers(CustomerID) );
 SELECT * FROM Orders;
 INSERT INTO Orders (OrderID,CustomerID, OrderDate)
VALUES (10308,2, '1996-09-18');
INSERT INTO Orders (CustomerID, OrderDate)
VALUES (10 ,'1996-10-19');
ALTER TABLE Orders MODIFY OrderID INT auto_increment;
INSERT INTO Orders (CustomerID, OrderDate)
VALUES (5,' 1996-11-20');
desc Orders;