# 📘 Week 4.1 | DOM Introduction

This week is all about learning how JavaScript interacts with HTML using the **DOM (Document Object Model)** to make your website dynamic and interactive.

---

## 📖 What is the DOM?
- DOM stands for **Document Object Model**.
- It’s a structured representation of an HTML document in the form of a **tree**.
- JavaScript uses the DOM to **select, modify, add, or delete elements** from the web page.

---

## 🧮 Mini Project: Add Two Numbers

Create a simple dynamic webpage where the user enters two numbers, clicks a button, and the result is shown.

### 📁 `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Two Numbers</title>
</head>
<body>
  <h1>Add Two Numbers</h1>
  <input id="num1" type="number" placeholder="Enter first number">
  <input id="num2" type="number" placeholder="Enter second number">
  <button onclick="addNumbers()">Add</button>
  <p id="result"></p>

  <script src="script.js"></script>
</body>
</html>
```

### 📁 `script.js`
```js
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").innerText = "Result: " + result;
}
```

---

## 🧱 Static Website vs Dynamic Website

| Feature              | Static Website                   | Dynamic Website                        |
|----------------------|----------------------------------|----------------------------------------|
| Content              | Fixed content                    | Changes based on user input            |
| Interaction          | Not interactive                  | Interactive (buttons, forms, etc.)     |
| Technologies         | HTML & CSS only                  | HTML, CSS, and JavaScript              |
| Example              | Portfolio, Resume                | Calculator, Todo App, News Feed        |

---

## 🛠️ DOM Methods Overview

### `createElement()`
Creates a new HTML element.
```js
const newDiv = document.createElement("div");
```

### `querySelector()`
Selects the **first** element that matches a CSS selector.
```js
const heading = document.querySelector("h1");
```

### `getElementById()`
Selects an element by its **ID**.
```js
const button = document.getElementById("myButton");
```

### `querySelectorAll()`
Selects **all** elements that match a CSS selector.
```js
const items = document.querySelectorAll("li");
```

---

## 🧩 Add and Append Child, Remove Elements

### `appendChild()`
Adds a child element to a parent.
```js
document.body.appendChild(newDiv);
```

### `remove()`
Removes an element from the DOM.
```js
newDiv.remove();
```

---
