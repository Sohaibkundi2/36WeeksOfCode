# 📘 Week 1.3 – Loops, Functions & Callback Functions

This part of the journey dives into some of the most important building blocks of JavaScript: loops, functions, and callback functions. Mastering these will level up your ability to control the flow and logic of your applications.

---

## 🔁 Loops

Loops help us run the same block of code multiple times. They are useful when you want to repeat tasks like iterating over arrays or running a block until a condition is met.

### 🔸 Types of Loops in JavaScript:
- `for` loop
- `while` loop
- `do...while` loop
- `for...of` loop
- `for...in` loop

```js
for (let i = 0; i < 5; i++) {
  console.log("This is loop number", i);
}
```

---

## 🧠 Functions

Functions are reusable blocks of code that can be executed whenever you need them.

### 🔸 Types of Functions:
- Function Declaration  
```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

- Function Expression  
```js
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

- Arrow Function  
```js
const greet = (name) => `Hello, ${name}!`;
```

---

## 🔄 Callback Functions

A **callback** is a function passed as an argument to another function and is executed after the main function finishes.

### 🔸 Why Use Callbacks?
They help with:
- Making code asynchronous (non-blocking)
- Handling API responses
- Executing code in order

```js
function processUser(name, callback) {
  console.log("Processing user:", name);
  callback();
}

function greetUser() {
  console.log("Welcome!");
}

processUser("Sohaib", greetUser);
```

---

## 💡 What I Learned

- Different types of loops and when to use them.
- Declaring and calling functions in multiple ways.
- How to use callbacks to make code more flexible and powerful.

---

## 📚 Resources

- [MDN - Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Callback Functions Guide](https://javascript.info/callbacks)

---

👨‍💻 _By Sohaib | Week 1.3 | #36WeeksOfCode_
