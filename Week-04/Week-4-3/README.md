# 📦 Week 4.3 | Mongo Deep Dive & Assignment

This week focuses on MongoDB and Mongoose in detail — covering how databases work, how to use Mongoose effectively, and why schemas are still important in NoSQL databases.

---

## 📚 What is a Database?

A **database** is a structured system to store, manage, and retrieve data efficiently. It allows developers to perform operations like insert, read, update, and delete (CRUD).

---

## 🗃️ Database vs File Systems

| Feature             | Database                          | File System                     |
|---------------------|------------------------------------|----------------------------------|
| Structure           | Organized in tables/collections    | Stored as raw files              |
| Query Support       | Advanced querying supported        | Manual parsing required          |
| Scalability         | Designed for scaling               | Not built for large-scale apps   |
| Performance         | Faster for complex operations      | Slower in data-heavy use cases   |

---

## 🌿 What is Mongoose?

**Mongoose** is a Node.js library that helps you work with MongoDB more easily by providing a schema-based solution.

Benefits:
- Adds structure to MongoDB documents
- Makes querying easier
- Handles validation and relationships

---

## 🧩 What are Models and Schemas?

- **Schema**: A blueprint that defines the structure of a document in MongoDB.
- **Model**: A wrapper for a schema, providing an interface to interact with the database.

### Example:
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);
```
# MongoDB is Schema-less.</br> Then Why Use Schema in Mongoose?
MongoDB allows flexible documents, but this can become messy in large apps. Using schemas in Mongoose helps:

- Ensure consistency

- Validate data types

- Provide better structure and maintainability