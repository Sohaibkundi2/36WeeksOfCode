// reverse a string

function reverseString(str){
    return str.split('').reverse().join('');
}

// console.log(reverseString('khan'))

// fabonacci series
// defenition is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

function fabonacci(numb){
    if(numb <=1) return numb;
    return fabonacci(numb-1) + fabonacci(numb-2);
}
// console.log(fabonacci(1))
// console.log(fabonacci(2))
// console.log(fabonacci(3))

// palindrome

function isPalindrome(str){
    return str === str.split('').reverse().join('')
}

// console.log(isPalindrome('maddam'))
// console.log(isPalindrome('cat'))





// 5. Sum of Even Numbers in an Array
// Write a function that takes an array of numbers and returns the sum of only the even numbers.

function sumEvenNumbers(arr) {
  let sum= 0;
  arr.forEach(element => {
    if(element % 2==0){
        sum +=element
    }
  });
  return sum
}
// console.log(sumEvenNumbers([1,2,3,4,5,6]))
function sumEvenNumbers(arr){
    return arr
    .filter(numb=>numb %2 ===0)
    .reduce((sum, numb)=>sum +numb)
    
}
// console.log(sumEvenNumbers([1,2,3,4,5,6,10]))


// 6. Array Deduplication
// Write a function that removes duplicate values from an array.

// Example:

// js
// Copy
// Edit
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// 7. Merge Sorted Arrays
// Given two sorted arrays, merge them into one sorted array.

// Example:

// js
// Copy
// Edit
// function mergeSortedArrays(arr1, arr2) {
//   let result = [];
//   let i = 0, j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// }
// 8. Find the Missing Number in an Array
// Given an array of n integers from 1 to n+1, find the missing number.

// Example:

// js
// Copy
// Edit
// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const sum = (n * (n + 1)) / 2;
//   const arrSum = arr.reduce((sum, num) => sum + num, 0);
//   return sum - arrSum;
// }
// 9. Two Sum Problem
// Given an array of numbers, return the indices of the two numbers that add up to a target sum.

// Example:

// js
// Copy
// Edit
// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
// }
// 10. Find Factorial of a Number
// Write a function to compute the factorial of a given number.

// Example:

// js
// Copy
// Edit
// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// 11. Deep Clone an Object
// Write a function that deeply clones an object (without using Object.assign() or spread syntax).

// Example:

// js
// Copy
// Edit
// function deepClone(obj) {
//   if (obj === null || typeof obj !== 'object') return obj;
  
//   let copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepClone(obj[key]);
//     }
//   }
//   return copy;
// }
// 12. Debouncing
// Write a debouncing function that limits the rate at which a function can be executed.

// Example:

// js
// Copy
// Edit
// function debounce(fn, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn(...args), delay);
//   };
// }
// 13. Promise.all() Implementation
// Write your own version of Promise.all() that takes an array of promises and resolves when all promises are resolved.

// Example:

// js
// Copy
// Edit
// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let completed = 0;
    
//     promises.forEach((promise, index) => {
//       promise
//         .then((value) => {
//           result[index] = value;
//           completed += 1;
//           if (completed === promises.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }
// 14. Find the First Non-Repeated Character
// Write a function that returns the first non-repeated character in a string.

// Example:

// js
// Copy
// Edit
// function firstNonRepeatedChar(str) {
//   const count = {};
//   for (let char of str) {
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (count[char] === 1) return char;
//   }
//   return null;
// }
// 15. Sort an Array of Objects by a Property
// Given an array of objects, sort them by a specific property.

// Example:

// js
// Copy
// Edit
// function sortByProperty(arr, prop) {
//   return arr.sort((a, b) => a[prop] - b[prop]);
// }
// 16. Find Missing Character in a String
// Given a string of length n, find the character that is missing from the sequence.

// Example:

// js
// Copy
// Edit
// function findMissingChar(str) {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     total += str.charCodeAt(i);
//   }
//   const expectedTotal = ((str.length + 1) * (str.length + 2)) / 2;
//   return String.fromCharCode(expectedTotal - total);
// }
// 17. Flatten a Nested Array
// Write a function that flattens an array of arrays.

// Example:

// js
// Copy
// Edit
// function flattenArray(arr) {
//   return arr.reduce((flat, item) => 
//     Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item), []);
// }











