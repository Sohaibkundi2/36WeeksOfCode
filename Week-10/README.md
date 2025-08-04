
# POSTGRESQL
PostgreSQL is an advanced, open-source relational database


# PRISMA

Prisma is a Node.js ORM (Object-Relational Mapper) that lets you interact with databases using JavaScript or TypeScript instead of raw SQL.


Q1. What is PostgreSQL?
> A: PostgreSQL is an open-source object-relational database system known for its robustness, ACID compliance, and support for complex queries and JSON data.

Q2. What is Prisma?
> A: Prisma is an open-source ORM (Object Relational Mapping) tool that simplifies database access in Node.js and TypeScript applications.

Q3. How is PostgreSQL different from MySQL?
> A: PostgreSQL supports advanced features like full-text search, custom data types, and is more standards-compliant. MySQL is widely used and simpler but lacks some PostgreSQL capabilities.

Q4. How is Prisma similar to Mongoose?
> A: Prisma (for SQL databases) and Mongoose (for MongoDB) both act as ORM/ODM layers to interact with databases using models in JavaScript/TypeScript.

 Q5. How do transactions work in PostgreSQL?
> A: You can use BEGIN, COMMIT, ROLLBACK to handle transactions. SAVEPOINT allows partial rollbacks using ROLLBACK TO.

Q6. How does Prisma handle relations?
> A: Prisma models support 1:1, 1:N, and N:N relations using foreign keys and the Prisma schema file.

Q7. What are migrations in Prisma?
> A: Migrations are auto-generated SQL changes created by Prisma when you modify your schema.prisma file, allowing version control of your DB structure.

Q8. What is the use of DTO in backend development?
> A: DTOs are used to structure and transfer only necessary data from one layer to another (e.g. database to frontend) to ensure separation of concerns.

Q9. What is the role of schema.prisma file?
>A: It defines the models, their fields, types, and relations for the Prisma ORM. It’s used to generate the Prisma Client.

Q10. How do you use Prisma Client in your code?
> A: You import the PrismaClient and use it to query or manipulate data in your database using JavaScript/TypeScript.
