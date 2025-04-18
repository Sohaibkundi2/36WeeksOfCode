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


function removeDuplicates(arr){
    return [... new Set(arr)]
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]

