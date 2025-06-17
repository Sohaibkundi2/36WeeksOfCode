# 📘 Week 8.1: Tailwind CSS - Basics Guide

## ✅ What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** used to build modern, responsive UIs faster and more efficiently.

Unlike Bootstrap (which provides pre-designed components), Tailwind gives you **low-level utility classes** like `p-4`, `text-center`, and `bg-blue-500` to construct any design directly in your HTML.

---

## 🚀 Why Use Tailwind CSS?

* 🔧 **Highly Customizable**
* ⚡ **Faster Development** (no need to switch between HTML and CSS)
* 📱 **Built-in Responsive Design Utilities**
* 🎨 **Consistent Design System**
* 🌙 **Supports Dark Mode**
* 🧩 **Great Ecosystem** (plugins, integrations, etc.)

---

## 🎯 Core Concepts

### 1. **Utility-First Classes**

Use classes like `m-4`, `text-lg`, `bg-red-500`, etc., directly in your HTML.

```html
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Hello Tailwind!
</div>
```

### 2. **Responsive Design (sm, md, lg, xl, 2xl)**

Tailwind follows **mobile-first design**. You apply base styles, then override at breakpoints.

```html
<div class="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive Text
</div>
```

| Breakpoint  | Prefix | Min Width |
| ----------- | ------ | --------- |
| Small       | `sm:`  | 640px     |
| Medium      | `md:`  | 768px     |
| Large       | `lg:`  | 1024px    |
| Extra Large | `xl:`  | 1280px    |
| 2XL         | `2xl:` | 1536px    |

---

### 3. **Dark Mode**

To enable dark mode:

In `tailwind.config.js`:

```js
module.exports = {
  darkMode: 'class',
  // other config
}
```

Then in HTML:

```html
<html class="dark">
  <body class="bg-white dark:bg-gray-900 text-black dark:text-white">
    Dark Mode Support
  </body>
</html>
```

You can toggle the `dark` class on `<html>` using JavaScript.

---

### 4. **Customization with tailwind.config.js**

You can customize colors, fonts, breakpoints, spacing, and more.

#### Example:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
```

This allows you to use `bg-primary` or `font-sans` in your HTML.

---

## ✅ Summary

* Tailwind is a **utility-first CSS framework** for fast UI development.
* Responsive breakpoints use `sm:`, `md:`, `lg:` etc.
* Dark mode is enabled via class and configured in `tailwind.config.js`.
* `tailwind.config.js` helps extend or override default styles.

---


