# 📘 Week 3.2 | Middlewares And Global Catches, Zod

This week, we focus on core Express.js concepts including **routing**, **middlewares**, **error handling**, and **input validation** using **Zod**.

---

## 🚦 What is a Route in Express?
A **route** defines a specific endpoint in your server where logic can be executed based on HTTP methods like GET, POST, PUT, DELETE.
or 
A route is like a specific path in your website. For example, when someone goes to /home or /about

for example:
```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

---

## 🧩 What are Middlewares?
A **middleware** is a function that runs **between** a request being made and a response being sent. Useful for tasks like authentication, validation, logging, etc.

or Think of middlewares like helpers that work in the background before your main code runs.
- A middleware can check if the user is logged in.

- Or, it can read data sent from a form.

```js
app.use(express.json()); // Built-in middleware for parsing JSON
```

---

## 🔄 What is app.use and How It Works?
`app.use()` is used to **register middlewares** globally. It runs for **every request**.

app.use() tells Express to use a middleware function for every request — no matter which route.

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

---

## ❗ What are Error Middlewares?
Sometimes your code breaks or something goes wrong. Express lets you create a special function to handle those errors. This function catches the error and shows a message instead of crashing the app.

These are special middlewares with **4 parameters**: `(err, req, res, next)`. They handle errors globally.

```js
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

---

## 🛑 What is Global Catches?
When something can go wrong inside a route (like invalid data), you use try...catch to catch the error.

Using `try...catch` blocks in routes and forwarding errors to the global error middleware.

```js
try {
  // something risky
} catch (err) {
  next(err);
}
```

---

## 📦 What is Zod and Why Use It?
Zod is like a security guard that checks your data before using it.

**Zod** is a JavaScript schema validation library that works well with Express.

### Example:
```js
const { z } = require("zod");
const userSchema = z.object({
  name: z.string(),
  age: z.number()
});

const validated = userSchema.parse(req.body);
// so by using zod, we can check that name is string or age is number or not
```

---


##  Summary
- **Routing** handles different URLs.
- **Middleware** powers features like logging, auth, and validation.
- **Zod** validates incoming data cleanly.
- **Global Error Handling** keeps things safe.



---


