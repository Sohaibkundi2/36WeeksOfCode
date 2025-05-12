# 📘 Week 4.2 | React Foundation

This week introduces React — a powerful JavaScript library for building user interfaces. We'll learn why React is popular and what problems it solves.

---

##  Static vs Dynamic Website

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

### Why we use react?
It allows you to efficiently update multiple state variables at once without reloading the page

---

##  What Problems Does React Solve?
```
React was created by Facebook to solve performance and maintenance issues in their complex UI, especially in the notification system. Traditional DOM manipulation (using jQuery or vanilla JS) was causing bugs and performance bottlenecks. React introduced a virtual DOM, component-based architecture, and one-way data flow, which made building fast, scalable, and maintainable UIs much easier.
```
---

##  Core React Concepts

### State:
State is a special variable in React that holds data that can change over time. When the state changes, React automatically re-renders the component to reflect the new data.

### Components:
Components are the building blocks of a React application. They are reusable pieces of UI, often written as functions, that manage their own state and behavior.

### Re-rendering:
Re-rendering is the process where React updates the UI to reflect changes in the state or props. React compares the new state with the old one and updates only the parts of the UI that need to change.