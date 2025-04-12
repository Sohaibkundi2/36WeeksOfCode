/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    // algorithm
    // 1. check if numbers is empty
    // 2. initialize largestNumb with first element of numbers
    // 3. loop through numbers
    // 4. check if largestNumb is less than current element
    // 5. if true, assign current element to largestNumb
    // 6. return largestNumb
    // 7. end
    if(numbers.length === 0){
        return undefined
    }

    let largestNumb = numbers[0]
    
    for (let index = 0; index < numbers.length; index++) {
        if(largestNumb < numbers[index])
        largestNumb = numbers[index]
    }
    return largestNumb
}
let arr = [12,32,42,13]

module.exports = findLargestElement;