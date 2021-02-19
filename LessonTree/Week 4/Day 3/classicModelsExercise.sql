USE classicmodels;

SHOW TABLES;
SHOW COLUMNS FROM products;

-- 1
--- Write a query to display the name, product line, and buy price of all products.
--- The output columns should display as Name, Product Line, and Buy Price.
--- The output should display the most expensive items first.
SELECT productName AS 'name', productline AS line, buyprice FROM products
ORDER BY buyprice DESC;

-- 2
-- Write a query to display the first name, last name, and city for all customers from Germany.
-- Columns should display as First Name, Last Name, and City.
-- The output should be sorted by the customer’s last name (ascending).
USE classicmodels;
SHOW TABLES;
SELECT * FROM customers LIMIT 5;
SELECT contactFirstName AS 'firstname', contactLastName AS 'lastname', city FROM customers
WHERE country="Germany"
ORDER BY lastname;
-- SELECT customerName FROM customers;

/*
Write a query to display each of the unique values of the status field in the orders table.
The output should be sorted alphabetically increasing.
Hint: the output should show exactly 6 rows.
*/
SELECT * FROM orders;
SELECT DISTINCT STATUS FROM orders
ORDER BY STATUS desc;


/*
Part 4
Select all fields from the payments table for payments made on or after January 1, 2005.
Output should be sorted by increasing payment date.
*/
SELECT * FROM payments LIMIT 600;
SELECT * FROM payments 
WHERE paymentDate>= "2005-01-01"
ORDER BY paymentdate;


/*
Part 5
Write a query to display all Last Name, First Name, Email and Job Title of all employees working out of the San Francisco office.
Output should be sorted by last name.
*/
SELECT * FROM employees;
SELECT lastname, firstname, email, jobtitle FROM employees
WHERE officecode=(SELECT officecode FROM offices WHERE city="San Francisco")
ORDER BY lastname;
-- office="San Francisco 

/*
Part 6
Write a query to display the Name, Product Line, Scale, and Vendor of all of the car products – both classic and vintage.
The output should display all vintage cars first (sorted alphabetically by name), and all classic cars last (also sorted alphabetically by name).
*/
SELECT * FROM products; 
SELECT productname AS 'name', productline, productscale AS 'scale', productvendor AS 'vendor' FROM products
WHERE productline LIKE '%classic%' OR productline like '%vintage%'
order by productline DESC, substring(productname,6);