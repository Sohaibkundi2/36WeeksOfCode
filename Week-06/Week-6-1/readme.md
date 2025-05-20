# React Hooks Basics

## What are React Hooks?

React Hooks are special functions that let you use React features like state and lifecycle inside **functional components**.  
Before Hooks, you had to use **class components** for these features. Hooks make your code easier and cleaner.

---

## useState

`useState` allows you to add **state** to functional components.  
State is like variables that React remembers and updates.  
When state changes, React automatically re-renders the component.

class compunent use this keyword and constructors but usestate is simple,


**Example:**

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

## useEffect

`useEffect` lets you perform **side effects** in components.

Side effects are tasks like:
- Fetching data from an API  
- Setting timers (`setTimeout`, `setInterval`)  
- Logging messages  
- Adding or removing event listeners  

It runs **after** the component renders.  
You can control when it runs by providing a **dependencies** array.

**Example:**

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

This runs the code every time `count` changes.

---

## useRef

`useRef` creates a **mutable reference** that stays the same between renders.  
It does **not** cause a re-render when updated.

Use cases:
- Accessing DOM elements directly (e.g., focusing an input)  
- Storing values that persist across renders without triggering updates  

**Example:**

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={focusInput}>
        Focus the input
      </button>
    </div>
  );
}
```

---

