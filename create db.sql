create database bamazon;
use bamazon;
create table products(
	item_id integer auto_increment,
    product_name varchar(50),
    department_name varchar(50),
    price float,
    stock_quantity integer,
    primary key(item_id)
);

insert into products(product_name,department_name,price,stock_quantity) values ('Nintendo Switch','Electronics',250.00,10);
insert into products(product_name,department_name,price,stock_quantity) values ('4pk Pilsner Beer Glasses 23.4oz','Bar and Wine',12.99,20);
insert into products(product_name,department_name,price,stock_quantity) values ('Google Home Mini','Smart Home',29.00,5);
insert into products(product_name,department_name,price,stock_quantity) values ('Haynes Athletic Shoes - Navy','Shoes',29.99,10);
insert into products(product_name,department_name,price,stock_quantity) values ('Bella 6 Qt. Pressure Cooker','Kitchen and Dining',62.08,20);
insert into products(product_name,department_name,price,stock_quantity) values ('Soft & Strong Toilet Paper','Household Essentials',3.29,100);
insert into products(product_name,department_name,price,stock_quantity) values ('Beats Solo3 Wireless Headphones','Electronics',199.99,5);
insert into products(product_name,department_name,price,stock_quantity) values ('Weber 18" Original Kettle Charcoal Grill','Patio and Garden',79.99,2);
insert into products(product_name,department_name,price,stock_quantity) values ('Pleated Velvet Round Throw Pillow','Home',25.54,25);
insert into products(product_name,department_name,price,stock_quantity) values ('Jetson Rogue Hoverboard','Sport',149.99,1);