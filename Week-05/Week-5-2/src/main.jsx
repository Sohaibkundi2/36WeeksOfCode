// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


function App() {
  const [number, setnumber] = useState(0)

const increment =()=>{
  setnumber(number + 1)
}

const decrement =()=>{
  setnumber(number - 1)
}
  return <>
    <h1>Hello, Sohaib! Welcome to Vite + React </h1>;
    <h2>Counter: {number}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
