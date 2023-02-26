CREATE TABLE shippingtable(ShippingId INT not null auto_increment, OrderId INT, City varchar(255), Country varchar(100), primary key(ShippingId), foreign key(OrderId) references Orders(OrderId) );
INSERT INTO shippingtable (OrderId,City, Country)
VALUES (10309,'Mumbai','India');
 SELECT * FROM shippingtable;
 INSERT INTO shippingtable (OrderId,City, Country)
VALUES (10311, 'Dubai','UAE');
 SELECT * FROM Orders;