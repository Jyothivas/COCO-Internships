CREATE TABLE Orders(OrderId INT not null, CustomerId INT, OrderDate DATE, primary key(OrderId), foreign key(CustomerId) references Customers(CustomerId) );
 SELECT * FROM Orders;
 INSERT INTO Orders (OrderId,CustomerId, OrderDate)
VALUES (10308,2, '1996-09-18');
INSERT INTO Orders (CustomerId, OrderDate)
VALUES (10 ,'1996-10-19');
ALTER TABLE Orders MODIFY OrderId INT auto_increment;
INSERT INTO Orders (CustomerId, OrderDate)
VALUES (5,' 1996-11-20');
desc Orders;