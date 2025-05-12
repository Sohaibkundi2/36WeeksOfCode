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
Data Structure	| Organized into tables, rows, and columns (relational) or collections and documents (NoSQL).|	Data is stored as files in directories.|

### Database vs File Systems (Summary):
- Databases store structured data, support complex queries, transactions, and ensure data integrity. They are ideal for applications requiring efficient data retrieval and relationships (e.g., e-commerce, banking).

- File Systems store unstructured data (e.g., documents, images) and offer simpler file storage and management, but lack advanced querying and data integrity features.

---

## What is Mongoose?

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
- Schema defines the structure (like a template).

- Model is used to interact with the data (like a class that works with the schema).
# MongoDB is Schema-less.</br> Then Why Use Schema in Mongoose?
MongoDB is flexible and doesn’t require a fixed structure, but using schemas in Mongoose adds structure and validation to your data. It helps ensure consistency, enforces data types and rules, supports relationships between collections, and provides a clean way to interact with the database through models.

## Maintain a Relationship Between Two Schemas
We can maintain relationships in Mongoose using ObjectId references and the ref keyword
```
    type: mongoose.Schema.Types.ObjectId, 
    ref:
``` 
## Find, findOne, findMany, update, delete etc methods in mongoose

| **Method**           | **Purpose**                                              | **Example**                                                    |
| -------------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| `find()`             | Returns **all documents** matching the query             | `User.find({ age: 20 })`                                       |
| `findOne()`          | Returns the **first document** matching the query        | `User.findOne({ email: 'a@example.com' })`                     |
| `findById()`         | Finds a document by its **`_id`**                        | `User.findById('648af3...')`                                   |
| `create()`           | Creates and saves a **new document**                     | `User.create({ name: 'John' })`                                |
| `save()`             | Saves a **new or modified instance**                     | `const u = new User(); u.save();`                              |
| `updateOne()`        | Updates **the first** matching document                  | `User.updateOne({ name: 'John' }, { age: 25 })`                |
| `updateMany()`       | Updates **all** matching documents                       | `User.updateMany({ active: true }, { lastLogin: Date.now() })` |
| `findOneAndUpdate()` | Finds and updates a document, returns the old or new doc | `User.findOneAndUpdate({ name: 'John' }, { age: 30 })`         |
| `deleteOne()`        | Deletes **the first** matching document                  | `User.deleteOne({ email: 'a@example.com' })`                   |
| `deleteMany()`       | Deletes **all** matching documents                       | `User.deleteMany({ inactive: true })`                          |
| `findOneAndDelete()` | Finds and deletes one document                           | `User.findOneAndDelete({ name: 'Mark' })`                      |
