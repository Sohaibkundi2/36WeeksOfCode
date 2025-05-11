 What Are Components?

**Components** are the building blocks of a React application.  
Each component represents a piece of the user interface.

There are two types of components:

- **Functional Components** – simpler and commonly used
- **Class Components** – older style (less used now)

### Example:

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

## What is State?
State is a built-in object in React that stores data or information about the component.
When state changes, the component automatically re-renders.

```

What is State?
State is a built-in object in React that stores data or information about the component.
When state changes, the component automatically re-renders.
```
Every time you click the button, count updates, and the UI refreshes.

## What is Re-rendering?
Re-rendering means React updates the UI to reflect the latest state or props.

Whenever:

- State changes (e.g., using setState or setCount)

- Props change (data passed to a component)

 React automatically re-draws the component with updated data.