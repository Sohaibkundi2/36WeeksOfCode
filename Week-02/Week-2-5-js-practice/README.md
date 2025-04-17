# 📚 Week 2.5 - JavaScript: Filter, Map, and Arrow Functions

This week focuses on practicing key JavaScript concepts like `map()`, `filter()`, and arrow functions — all of which are essential for writing clean, modern, and functional JavaScript code.

---

## 💡 Interview-Oriented Questions & Answers

### 1. What is the difference between `map()` and `forEach()`?

- `map()` returns a **new array** with the results after applying a function to each element.
- `forEach()` executes a function on each element but **does not return** a new array.

```js
const arr = [1, 2, 3];

// map
const doubled = arr.map(x => x * 2); // [2, 4, 6]

// forEach
arr.forEach(x => console.log(x * 2)); // Logs: 2, 4, 6
```
### 2. What is the return value of `filter()`?

- `filter()` returns a new array containing all elements that pass a specific condition (truthy callback).
```js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0); // [2, 4]
```
### 3. Can `map()` be used for filtering? Why or why not?
- Technically, yes — but it's not recommended.

- map() is for transforming values, not filtering them out. Using it for filtering will lead to undefined or extra logic.

- Better to use filter() for filtering, and map() for transformation.

### 4. What's the key difference between regular functions and arrow functions?



| Feature                | Regular Function             | Arrow Function             |
|------------------------|------------------------------|----------------------------|
| **this** keyword       | Dynamic (depends on scope)   | Lexical (inherits `this`)  |
| **Syntax**             | Verbose                      | Concise                    |
| **Constructor compatible** | ✅ Yes                  | ❌ No                      |

---

### 5. In which case should we avoid using arrow functions?

Avoid arrow functions when:

- You need a dynamic `this` (e.g., in object methods or constructors).
- You rely on the `arguments` object (not available in arrow functions).

---

### 6. Can you chain `map()` and `filter()`? What does that look like?

Yes! This is a common and powerful pattern:

```js
const nums = [1, 2, 3, 4, 5];
const result = nums.filter(n => n > 2).map(n => n * 2); 
console.log(result); // [6, 8, 10]
```


### 7. Explain `startsWith()` vs `includes()` in strings

- **`startsWith()`**: Checks if a string **starts** with a specific substring.
- **`includes()`**: Checks if a string **contains** a specific substring **anywhere** within it.

#### 🔹 Example:
```js
"JavaScript".startsWith("Java");   // true
"JavaScript".includes("Script");   // true
```

### 8. Why are array methods like map() and filter() preferred over for loops?
- ✅ Cleaner & more readable code

- ✅ Avoids manual indexing

- ✅ Encourages functional programming style

- ✅ Less error-prone and easier to chain operations
