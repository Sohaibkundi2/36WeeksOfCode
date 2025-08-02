
-- ==========================================
--  Chai Store SQL Practice File by Sohaib
-- ==========================================

-- ======================
--  DDL (Data Definition Language)
-- ======================
-- DDL commands are used to define and manage database structure:
-- Includes: CREATE, ALTER, DROP, TRUNCATE

CREATE TABLE chai_store(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    available BOOLEAN NOT NULL
);
-- Creates the chai_store table with basic fields.

-- ======================
--  DML (Data Manipulation Language)
-- ======================
-- DML commands deal with data manipulation: INSERT, UPDATE, DELETE

INSERT INTO chai_store (id ,name, price, available) VALUES
    (01, 'Masala Chai', 2.50, TRUE),
    (02, 'Ginger Chai', 2.75, TRUE),
    (03,'Cardamom Chai', 3.00, FALSE),
    (04,'Lemon Chai', 2.25, TRUE),
    (05,'Mint Chai', 2.80, TRUE),
    (06,'Tulsi Chai', 3.20, FALSE),
    (07,'Kashmiri Chai', 4.00, TRUE),
    (08,'Iced Chai', 3.50, TRUE),
    (09,'Spiced Chai', 2.90, TRUE),
    (10,'Vanilla Chai', 3.10, FALSE);

DELETE FROM chai_store WHERE chai_store.name = 'Green Tea';

UPDATE chai_store 
SET price = 2.75, available = FALSE
WHERE chai_store.name = 'Masala Chai';

-- ======================
--  DQL (Data Query Language)
-- ======================
-- DQL is used to query data (mainly SELECT)

SELECT * FROM chai_store WHERE chai_store.name = 'Green Tea';
SELECT * FROM chai_store WHERE available = TRUE;
SELECT * FROM chai_store WHERE price < 3.00;
SELECT * FROM chai_store WHERE name LIKE '%Chai%';

SELECT * FROM chai_store 
WHERE chai_store.name LIKE 'Ginger Chai' 
OR chai_store.name LIKE 'Mint Chai';

SELECT name as "chai name", price as "cost" 
FROM chai_store
WHERE available = TRUE;

SELECT *, name AS "chepeast chai" 
FROM chai_store 
WHERE available = true 
ORDER BY price ASC 
LIMIT 3;

SELECT SUM(price) 
FROM chai_store 
WHERE available = TRUE;

-- ======================
--  DCL (Data Control Language)
-- ======================
-- DCL is used for permissions and access control
-- Examples:
-- GRANT SELECT ON chai_store TO some_user;
-- REVOKE SELECT ON chai_store FROM some_user;

-- ======================
--  TCL (Transaction Control Language)
-- ======================
-- TCL manages transactions in the database.
-- Examples:
-- BEGIN;
-- UPDATE chai_store SET price = 5.00 WHERE name = 'Ginger Chai';
-- COMMIT;
--but ORM like prisma, drizzle have itself BEGIN and COMMIT

-- ROLLBACK;

-- SAVEPOINT checkpoint1;
--  some queries here...
-- ROLLBACK TO SAVEPOINT checkpoint1;


-- ======================
--  DTO (Data Transfer Operations) - (Informal term)
-- ======================
-- DTO isn't an official SQL term, but commonly used in backend apps.
-- It refers to objects used to transfer data between layers in code.

-- In raw SQL, data transfer is handled via SELECT queries or exported data.
-- Example:
-- COPY chai_store TO '/tmp/chai_store.csv' DELIMITER ',' CSV HEADER;
