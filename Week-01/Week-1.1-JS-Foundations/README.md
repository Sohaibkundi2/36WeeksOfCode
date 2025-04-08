
# Week 01.1 - JavaScript Foundations 🚀

This week covers the **core fundamentals** of JavaScript – the most essential programming language for web development. These basics will help you understand how JavaScript works under the hood, so you can build better and more efficient applications.

---

## ✅ Topics Covered

### 1. Why Languages?

Programming languages help us communicate with computers. Just like we use English to talk to people, we use JavaScript, Python, or C++ to give instructions to computers.

> In web development, **JavaScript is a must-have** because it runs directly in the browser and can be used for both frontend and backend.

---

### 2. Interpreted vs Compiled Languages

| Type            | Behavior                                                    | Examples           |
| --------------- | ----------------------------------------------------------- | ------------------ |
| **Compiled**    | Code is converted to machine language **before** execution. | C, C++, Java       |
| **Interpreted** | Code is run **line-by-line at runtime**.                    | JavaScript, Python |

✅ JavaScript is an **interpreted** language.

---

### 3. Why JavaScript >> Other Languages?

- Runs in **all modern browsers**.
- Can be used on both frontend (React, Vue) and backend (Node.js).
- Large community, lots of libraries (npm).
- Beginner-friendly syntax.

---

### 4. Strict vs Dynamic Languages

| Type        | Description                                      | Examples   |
| ----------- | ------------------------------------------------ | ---------- |
| **Strict**  | Variables have fixed data types                  | Java, C++  |
| **Dynamic** | Variable types are flexible (can change anytime) | JavaScript |

```js
let x = 5;      // Number
x = "hello";    // Now it's a String → JS allows this
```

✅ JavaScript is **dynamically typed**.

---

### 5. Single Threaded Nature of JavaScript

JavaScript is **single-threaded**, which means:

- It executes one command at a time.
- Uses **event loop** and **callbacks** to handle asynchronous code (like API calls).

---

### 6. Simple Primitives in JavaScript

| Concept    | Description                         |
| ---------- | ----------------------------------- |
| Variables  | `var`, `let`, `const`               |
| Data Types | `string`, `number`, `boolean`, etc. |
| Loops      | `for`, `while`, `for...of`, etc.    |

Example:

```js
let name = "Sohaib";
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 7. Complex Primitives

#### Arrays

```js
let fruits = ["apple", "banana", "cherry"];
```

#### Objects

```js
let user = {
  name: "Sohaib",
  age: 19
};
```

---

### 8. Functions

Reusable blocks of code.

```js
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Sohaib"));
```

✅ Types: Regular, Arrow, and Anonymous functions.

---

### 9. Callback Functions

Functions passed **as arguments** to other functions.

```js
function greet(callback) {
  console.log("Hi!");
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet(sayBye);
```

Common use: Event listeners, `setTimeout`, and API calls.

---

## 🔗 Resources

- [JavaScript Guide – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript Book](https://eloquentjavascript.net/)

---

👨‍💻 *By Sohaib | Week 01.1 | #36WeeksOfCode*

