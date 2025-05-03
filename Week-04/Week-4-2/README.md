# 📘 Week 4.2 | React Foundation

This week introduces React — a powerful JavaScript library for building user interfaces. We'll learn why React is popular and what problems it solves.

---

## 🧱 Static vs Dynamic Website

* **Static Website**:

  * Displays the same content to all users.
  * No user interaction or data changes.
  * Example: Plain HTML/CSS pages.

* **Dynamic Website**:

  * Content can change based on user input or data.
  * Uses JavaScript (or frameworks like React) to update UI without reloading the page.

---

## ⚛️ Why React Came?

* Traditional websites needed **full page reloads** for every interaction.
* Managing large codebases with vanilla JavaScript became complex.
* Reusability and component-based UI were lacking.
* React provides a **modern way** to build scalable and interactive UIs.

---

## ❓ What Problems Does React Solve?

* Eliminates full page reloads with **Single Page Application (SPA)** behavior.
* Uses **Virtual DOM** to efficiently update only the changed parts of the UI.
* Introduces **components** that make code reusable and manageable.
* Handles **state management** and **re-rendering** smoothly.

---

## 🔁 Core React Concepts

### 1. Components

* Reusable pieces of UI.
* Example: Buttons, forms, navbars, cards.

```jsx
function Welcome() {
  return <h1>Hello, Sohaib!</h1>;
}
```

---

### 2. State

* Holds dynamic data that changes over time.
* Triggers a re-render when updated.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count is {count}
    </button>
  );
}
```

---

### 3. Re-rendering

* When the state or props of a component change, React **automatically updates the UI**.

---
