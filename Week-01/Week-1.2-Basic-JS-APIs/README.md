# 📦 Week 1.2 – Basic JS APIs (Beginners)

In this week, I explored some of the **most powerful and commonly used JavaScript APIs** that help with data manipulation and object-oriented programming.

---

## ✅ Topics Covered

### 🔹 Introduction
JavaScript APIs (Application Programming Interfaces) refer to built-in functions/methods provided by the language to make programming easier and more efficient. These include array methods, object methods, and even classes to write clean and modular code.

---

### 🔹 `map`, `filter`, `find`, and `sort`

These methods are built-in **Array methods** used for transforming and processing data.

#### ✅ `map()`
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

#### ✅ `filter()`
```js
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

#### ✅ `find()`
```js
const users = [{id: 1}, {id: 2}];
const user = users.find(u => u.id === 2);
console.log(user); // {id: 2}
```

#### ✅ `sort()`
```js
const numbers = [4, 2, 5, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5]
```

---

### 🔹 `classes`
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

const person1 = new Person("Sohaib");
console.log(person1.greet()); // Hello, I'm Sohaib
```

---

### 🔹 `Objects`
```js
const user = {
  name: "Sohaib",
  age: 19,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.greet(); // Hi, I'm Sohaib
```

---

## 💡 Summary

- Practiced essential array methods to transform and filter data.
- Learned how `map`, `filter`, `find`, and `sort` can make working with arrays easier.
- Understood the basics of object-oriented programming with **Classes**.
- Refreshed knowledge on **Objects**, the core building blocks in JS.

---

## 🔗 Resources

- [Array Methods – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Classes – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Objects – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

---

👨‍💻 _By Sohaib | Week 1.2 | #36WeeksOfCode_
