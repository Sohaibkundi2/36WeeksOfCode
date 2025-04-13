/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // algorithm
    // 1. check if str is empty
    // 2. initialize vowels with 'aeiouAEIOU'
    // 3. initialize count with 0
    // 4. loop through str
    // 5. check if current character is in vowels
    // 6. if true, increment count
    // 7. return count
    // 8. end

    if (str.length === 0) return 0;
  let vowels = 'aeiouAEIOU'
  let count = 0

  for(let i =0; i< str.length;i++){
    if(vowels.includes(str[i])){
      count++
    }
  }
return count;

}
// Example usage
const str = "Sohaib"
console.log(countVowels(str))

module.exports = countVowels;