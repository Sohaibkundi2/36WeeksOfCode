
const express = require("express");
const { z } = require("zod");
//  z is a TypeScript-first schema declaration and validation library
//  zod is a TypeScript-first schema declaration and validation library
const app = express();
app.use(express.json()); // Global middleware for JSON parsing

const PORT = 3000;

// Zod schema
const userSchema = z.object({
  name: z.string(),
  age: z.number()
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Express App!");
});

app.post("/user", (req, res, next) => {
  try {
    const validatedUser = userSchema.parse(req.body);
    res.status(200).json({ message: "User data validated", data: validatedUser });
  } catch (err) {
    next(err); // Forward error to error middleware
  }
});

// Global Error Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
