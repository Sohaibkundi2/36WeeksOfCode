// Practice Coding Questions

// 1. Double the Numbers
const nums1 = [1, 2, 3, 4];
function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}
// console.log(doubleNumbers(nums1)); // [2, 4, 6, 8]

// 2. Filter Even Numbers
const nums2 = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
// console.log(filterEvenNumbers(nums2)); // [2, 4, 6]

// 3. Names Starting with "A"
const names = ["Ali", "Ahmed", "Bilal", "Sara", "Adeel"];
function namesStartWithA(arr) {
  return arr.filter(name => name.startsWith("A"));
}
// console.log(namesStartWithA(names)); // ["Ali", "Ahmed", "Adeel"]

// 4. Get Names of Adults
const people = [
  { name: "Ali", age: 16 },
  { name: "Ahmed", age: 22 },
  { name: "Sara", age: 18 },
];
function getAdultNames(arr) {
  return arr.filter(person => person.age >= 18).map(person => person.name);
}
// console.log(getAdultNames(people)); // ["Ahmed", "Sara"]

// 5. Convert Names to Uppercase
const allNames = ["ali", "sara", "ahmed"];
function convertToUpperCase(arr) {
  return arr.map(name => name.toUpperCase());
}
// console.log(convertToUpperCase(allNames)); // ["ALI", "SARA", "AHMED"]

// 6. Count Names Starting with "A"
const randomNames = ["Ali", "Sara", "Ahmed", "Zara", "Adeel"];
function countNamesStartingWithA(arr) {
  return arr.filter(name => name.startsWith("A")).length;
}
// console.log(countNamesStartingWithA(randomNames)); // 3

// 7. Chain map and filter
const items = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Monitor", price: 10000 },
];
function getExpensiveItemNames(arr) {
  return arr
    .filter(item => item.price > 1000)
    .map(item => item.name.toUpperCase());
}
// console.log(getExpensiveItemNames(items)); // ["LAPTOP", "MONITOR"]

// 8. Filter Words by Length
const words = ["pen", "notebook", "laptop", "sun", "sky"];
function filterLongWords(arr) {
  return arr.filter(word => word.length > 4);
}
// console.log(filterLongWords(words)); // ["notebook", "laptop"]
