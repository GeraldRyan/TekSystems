USE banking;
-- 1. For each product, show the product name "Product" and the product type name "Type".
SHOW TABLES FROM banking;
SELECT * FROM banking.product;

SET @cnt = 0;
SELECT (@cnt:=@cnt+1) AS 'index', name, product_type_cd AS 'type' FROM banking.product;

-- 2. For each branch, list the branch name and city, plus last name and title of each employee who works in that branch.

SELECT b.name, b.city, e.Last_name, e.title FROM employee e, branch b WHERE e.assigned_branch_id=b.branch_id;

-- 3. Show a list of each unique employee title.

SET @cnt = 0;
SELECT (@cnt:=@cnt+1) AS 'unique title id', title
FROM 
(
SELECT DISTINCT title
FROM employee) e;

-- 4. Show the last name and title of each employee, along with the last name and title of that employee's boss.
SELECT * FROM employee;
SELECT e1.LAST_NAME 'employee\'s last name', e1.TITLE 'employee\'s title', e2.TITLE 'manager\'s title', e2.LAST_NAME as 'manager\'s lastname' FROM employee AS e1, employee AS e2 WHERE e1.superior_emp_id=e2.emp_id;

-- 5. For each account, show the name of the account's product, the available balance, and the customer's last name.
-- link account with product via PRODUCT_CD && link account with customer last name via CUST_ID
SELECT p.name 'product name', a.avail_balance 'available balance', i.last_name 'customer-name'
FROM account a
INNER JOIN product p USING (PRODUCT_CD)
INNER JOIN customer c USING (CUST_ID)
INNER JOIN individual i USING (CUST_ID);

-- 6. List all account transaction details for individual customers whose last name starts with 'T'.
SELECT * FROM acc_transaction t;
SELECT t.*, i.LAST_NAME FROM acc_transaction t INNER JOIN account a USING (account_id) INNER JOIN individual i USING (CUST_ID) WHERE LEFT(i.LAST_NAME,1)='s';