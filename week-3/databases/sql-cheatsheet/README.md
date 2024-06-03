# SQL Queries cheatsheet 🐿️

- The key thing to grasp with SQL SELECT statements is not any individual word, it’s understanding the grammar - how those words interact together. Because it’s very difficult to understand what one of the words is doing if you don’t understand how it intersects with the others.
- `SELECT` & `FROM`

  ```sql
  /* SELECT (Give me this information) */
  /* FROM (The information source) */

  SELECT *
  FROM Customers;
  ```

- `WHERE` - filter based on a condition

  ```sql
  /* WHERE (Filter based on a condition) */
  /* Single speech marks are important here,
  otherwise, SQL might think you're referring
  to a column called Berlin */

  SELECT *
  FROM Customers
  WHERE City = 'Berlin';
  ```

- `WHERE` doesn’t just work on its own, there are other keywords that go with `WHERE`
  - `IN` - list of conditions
  - `AND` - add multiple filters - all of the filters have to pass
  - `OR` - add multiple filters - one of the filters have to pass
  - `BETWEEN` - range of filters
  - `NOT` - not this condition - can combine with any of the above
  - `LIKE` - instead of saying something is equal to something else, we can combine a `LIKE` with a `WHERE` to look for things that are similar to —> to search for a specified pattern in a column
- Each keyword can take a while to learn them all, but if you think of them as part of the grammar, it becomes easier. `SELECT` gets followed by a `FROM`. You can have a `WHERE` on top of those. If you got a `WHERE`, you can combine it with these words (`IN`, `AND`, `OR` etc.).

  ```sql
  /*IN*/
  SELECT *
  FROM Customers
  WHERE City IN ('Berlin', 'Paris', 'London');

  /*AND*/
  SELECT *
  FROM Customers
  WHERE City IN ('Berlin', 'Paris', 'London');
  AND CustomerId < 20;

  /*OR*/
  SELECT *
  FROM Customers
  WHERE City IN ('Berlin', 'Paris', 'London');
  OR CustomerId < 20;

  /*BETWEEN*/
  SELECT *
  FROM Customers
  WHERE CustomerId BETWEEN 12 AND 34;

  /*NOT*/
  SELECT *
  FROM Customers
  WHERE CustomerId NOT BETWEEN 12 AND 34;

  /*LIKE - this one means 'give me a name that starts
  with A followed by any number of letters'*/
  SELECT *
  FROM Customers
  WHERE CustomerName LIKE 'A%';

  /* or a word that has any number of letters and
  then finishes with a 't'*/
  SELECT *
  FROM Customers
  WHERE CustomerName LIKE '%t';

  /* to select words with double t's - any nb of letters
  then double t's then any nb of letters*/
  SELECT *
  FROM Customers
  WHERE CustomerName LIKE '%tt%';
  ```

- `ORDER BY` - sort information based on a column

  - `DESC` - to make the order descendant

  ```sql
  /*SELECT THE FIRST 50 ROWS*/
  SELECT *
  FROM Customers
  WHERE CustomerId < 50;

  /* But, it might be nice to get it in a particular
  order*/
  /* At the moment, it's ordered by customerId but
  might be nice to get it ordered by country*/
  /*By default, the order is ascendent*/
  SELECT *
  FROM Customers
  WHERE CustomerId < 50
  ORDER BY Country;

  /*If we wanted it in descendant order*/
  SELECT *
  FROM Customers
  WHERE CustomerId < 50
  ORDER BY CustomerId DESC;
  ```

- `LIMIT` - right at the end of things → only give back a certain amount of information

  - We’re building up the grammar here:
    - Filter
    - Sort
    - Limit
  - They come in this order - you will not find them out of this order

  ```sql
  /*Just give me the first 5 rows*/
  SELECT *
  FROM Customers
  WHERE CustomerId < 50
  ORDER BY CustomerId DESC
  LIMIT 5;
  ```

- Extra words that come with `SELECT` - OPTIONAL WORDS
  - `COUNT` - how many rows there are
  - `SUM`
  - `AVG`
  - `MIN`
  - `MAX`
  - `DISTINCT`
- These words belong to `SELECT`, the same way `IN` etc belong to `WHERE`

  ```sql
  /*COUNT - EXAMPLE 1*/
  SELECT COUNT(*)
  FROM Customers;

  /*COUNT - EXAMPLE 2*/
  SELECT COUNT(City)
  FROM Customers;

  /*LET'S JUMP IN ON THE PRODUCTS TABLE*/
  SELECT *
  FROM Products;

  /*Return total price of all products in database*/
  SELECT SUM(Price)
  FROM Products;

  /*We can combine these words*/
  SELECT COUNT(ProductId), SUM(Price)
  FROM Products;

  /*Use of DISTINCT - Unique city values to avoid duplicates*/
  SELECT City
  FROM Customers;

  /*VS - 69 unique cities vs 92 cities*/
  SELECT DISTINCT City
  FROM Customers;
  ```

- Each individual keyword is complicated - but if you learn order of statements, it starts making more sense
- `AS` - lets you rename a column or a table

  - Appears in different places
    - `FROM`
    - `SELECT`

  ```sql
  SELECT *
  FROM Products;

  /*Gets returned with what I asked for as the column heading*/
  SELECT SUM(Price)
  FROM Products;

  /*Use AS keyword to rename it*/
  /* AS lets me give a column an alias*/
  SELECT SUM(Price) AS total_price
  FROM Products;

  /*Doesn't have to be data you manipulated*/
  SELECT ProductName AS Title
  FROM Products;

  /*When working with multiple tables*/
  SELECT Products.ProductName
  FROM Products;

  /*Annoying to have to write Products everytime*/
  /*AS keyword lets you rename a column or a table*/
  SELECT P.ProductName
  FROM Products AS P;
  ```

- `GROUP BY`

  - groups rows that have the same values into summary rows, like "find the number of customers in each country"
  - Categorize rows together
  - Instead of returning individual rows, I can choose to group those rows, organize them together by `COUNTRY`. Give me a bucket containing all of the rows from Germany, all of the rows from Sweden etc

  ```sql
  SELECT *
  FROM Customers;

  SELECT COUNT(*)
  FROM Customers;

  SELECT DISTINCT Country
  FROM Customers;

  /*One level of extra complexity*/
  /*How many customers do I have in each city*/

  /*GROUP BY - put these rows into summary buckets*/
  SELECT *
  FROM Customers
  GROUP BY Country;

  /*Notice that it has created buckets of country (22 countries)*/
  /*BUT, SQL doesn't understand how we want to
  summarize those buckets*/
  /*The data we have atm doesn't make sense,
  seems SQL only returned the first row or last row in
  each bucket*/

  SELECT Country
  FROM Customers
  GROUP BY Country;

  /* See a count of how many customers
  there are in each country*/
  /* Summarize the bucket - give me the count of rows*/
  /* 3 users in argentina etc*/
  SELECT Country, COUNT(*)
  FROM Customers
  GROUP BY Country;

  /*More complicated*/
  SELECT Country, COUNT(*)
  FROM Customers
  GROUP BY Country, City;

  /* Order by count */
  SELECT Country, COUNT(*)
  FROM Customers
  GROUP BY Country, City
  ORDER BY COUNT(*) DESC;
  ```

- Fundamental grammar summary:

  ```sql
  /*SELECT - keyword that requests information COUNT SUM AVG MIN MAX DISTINCT AS */
  /*FROM - the information source AS */
  /*WHERE - filter based on a condition IN AND OR BETWEEN NOT LIKE*/
  /*GROUP BY - group rows that have the same values into summary rows*/
  /*ORDER BY - sort information based on a column DESC*/
  /*LIMIT - give back a certain amount of information */
  ```

\***\*Joins:\*\***

What happens if we work with multiple tables?

- We can use the "relational" aspect of relational databases
- Instead of just `SELECT`ing `FROM` a single table, we can `SELECT` from two (or more!) tables combined together.
- The `JOIN` keyword is used to combine tables, but to meaningfully `JOIN` two tables, there has to be a link between them (`FOREIGN KEY`)

  ```sql
  SELECT *
  FROM Products
  LEFT JOIN Suppliers
  ON (Products.SupplierId = Suppliers.SupplierId);
  ```

W3 Schools JOIN: https://www.w3schools.com/sql/sql_join.asp

**Challenges solutions:**

- The number of customers based in Mexico (**5**)
  ```sql
  SELECT COUNT(*)
  FROM Customers
  WHERE Country = 'Mexico';
  ```
- The number of unique cities in the customer table (**69**)
  ```sql
  SELECT COUNT(DISTINCT(City))
  FROM Customers;
  ```
- The name of the most expensive product in the database (**Côte de Blaye**)
  ```sql
  SELECT ProductName
  FROM Products
  ORDER BY price DESC
  LIMIT 1;
  ```
- What city the only customer with a double `z` in their name is based in (**Bergamo**)
  ```sql
  SELECT City
  FROM Customers
  WHERE CustomerName LIKE '%zz%';
  ```
- The name of the country where most customers are based (**USA**)
  ```sql
  SELECT Country
  FROM Customers
  GROUP BY Country
  ORDER BY COUNT(*) DESC
  LIMIT 1;
  ```
- A list of product names and associated categories
  ```sql
  SELECT P.ProductName, C.CategoryName
  FROM Products AS P
  LEFT JOIN Categories AS C
  ON (P.CategoryId = C.CategoryId);
  ```
- A list of products and total price (unit price \* quantity) for each item ordered as part of order `10251`
  ```sql
  SELECT P.ProductName, (P.Price * O.Quantity) AS total
  FROM OrderDetails AS O
  LEFT JOIN Products AS P
  ON (O.ProductId = P.ProductId)
  WHERE O.OrderId = 10251;
  ```
- A list of all products showing the name of the product, the supplier, and the category
  ```sql
  SELECT P.ProductName, S.SupplierName, C.CategoryName
  FROM Products AS P
  LEFT JOIN Suppliers AS S
  ON (P.SupplierId = S.SupplierId)
  LEFT JOIN Categories AS C
  ON (P.CategoryId = C.CategoryId)
  ```
- A list of the total number of products and average price per category for each supplier

  ```sql
  SELECT
    S.SupplierName, C.CategoryName,
    COUNT(*) AS ProductCount,
    ROUND(AVG(P.Price), 2) as MeanPrice
  FROM Products AS P
  LEFT JOIN Suppliers AS S
  ON (P.SupplierId = S.SupplierId)
  LEFT JOIN Categories AS C
  ON (P.CategoryId = C.CategoryId)
  GROUP BY S.SupplierName, C.CategoryName;
  ```