/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Algorithm
  // check if empty
  // tolowercase
  // stored in a variable
  // reverse the string and stored in another variable 
  // compare
  // return true or false

  if(str.length ===0) return true;

  let actualString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseString = actualString.split('').reverse().join('')
  return actualString === reverseString


}
let str = "vmadamv"
console.log(isPalindrome(str))
module.exports = isPalindrome;
