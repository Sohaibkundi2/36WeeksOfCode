
# Week 1.4 – Async, Await and Promises 🚀

This week we dive into one of the most crucial concepts in JavaScript – asynchronous programming. Understanding how JavaScript handles asynchronous operations is key to writing efficient and bug-free code.

---

## ✅ Topics Covered

### 🔁 Async vs Sync Functions
- **Synchronous** functions are executed in the sequence they appear.
- **Asynchronous** functions allow the program to continue running while waiting for an operation to complete (like fetching data).

### 🔄 Promises
- A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation.
- It has 3 states: `pending`, `fulfilled`, `rejected`.
```js
let promise = new Promise((resolve, reject) => {
  // async task
});
```

### ⏳ Async / Await
- `async` keyword turns a function into a promise.
- `await` can be used inside `async` functions to pause until the promise resolves.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

### 🧠 Callback vs Promises
- **Callbacks**: Function passed into another function to run after the first finishes.
- **Promises**: A cleaner, more powerful alternative to callbacks.
- Avoids callback hell with `then()` and `catch()` or even better with `async/await`.

---

## 💡 Summary

- Use **promises** or **async/await** to handle asynchronous operations.
- Helps manage API calls, timers, and complex data flows.
- `async/await` makes the code look synchronous and easier to understand.

---

👨‍💻 _By Sohaib | Week 1.4 | #36WeeksOfCode_
