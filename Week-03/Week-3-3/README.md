# 📘 Week 3.3 | Databases And Authentication

This week covers important concepts like **Fetch API**, **authentication**, **cryptography**, and **working with databases** like **MongoDB** using **Mongoose**. These are super important when you're building a real-world full stack app.

---

## 🌐 What is Fetch API?
The `fetch()` method is used to get or send data between a web browser and a backend server.

- It is built into modern browsers.
- It returns a **promise** that resolves with the response.

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🚀 Creating a Fetch POST Request
You can also use `fetch()` to send data to the server using `POST` method:

```js
fetch("http://localhost:3000/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Ali", age: 21 }),
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🔐 What is Authentication?
Authentication is the process of **verifying who a user is**. Example:

- A login form where a user enters email and password.
- If the credentials are correct, the user gets access.

---

## 🔒 Cryptography Basics (for Web Devs)

### 🔑 Hashing
- Hashing converts plain text (like passwords) into a fixed, unreadable string.
- You **can't reverse** a hash.
- It's used to safely store passwords.

### 🔐 Encryption
- Encryption hides data in such a way that it can be **reversed back** (decrypted) using a key.
- Used for secure messages and sensitive data.

---

## 📩 What is JWT (JSON Web Token)?
JWT is a way to securely send user data (like login identity) between the client and server.

- After login, the server sends back a token (like a digital badge).
- This token is stored in the browser (usually localStorage).
- The client sends this token on every request to prove who they are.

```js
// Example header
Authorization: Bearer <your_token_here>
```

---

## 💾 What is Local Storage?
Local Storage is like a tiny database in your browser where you can save data.

```js
localStorage.setItem("token", "abc123");
const token = localStorage.getItem("token");
```

---

## 🧠 Why Do We Need Databases?
Web apps often need to store things like users, posts, or products. A database helps by:

- Organizing and saving your data
- Making it easy to retrieve or update info
- Keeping everything safe and scalable

---

## 🍃 What is MongoDB?
MongoDB is a popular **NoSQL** database that stores data in **JSON-like documents** (not tables).

---

## 🛠 How to Create a MongoDB Database (with Mongoose)
Mongoose is a tool that helps connect Node.js and MongoDB.

### Install Mongoose:
```bash
npm install mongoose
```

### Connect to MongoDB:
```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));
```

---

## 🧱 What is Mongoose?
Mongoose makes working with MongoDB easier by using schemas and models.

### Example:
```js
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", UserSchema);
```

---

## 📤 Sending Data to Backend Server (POST Request)
Here’s how you can send form data to your backend:

### Express.js Code Example:
```js
app.post("/user", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send("User saved!");
});
```

This will:
- Receive data from frontend
- Save it into MongoDB

---

## ✅ Summary
- `fetch()` is used for sending and receiving data between client and server.
- Authentication ensures secure access to your app.
- Hashing and encryption protect sensitive data.
- JWT enables token-based login system.
- MongoDB + Mongoose makes database integration super smooth.

🎯 You now have the **full power** to connect frontend to backend and securely store data!

