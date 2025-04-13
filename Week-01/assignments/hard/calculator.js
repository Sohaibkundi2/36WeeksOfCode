/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator{
  constructor(){
    this.result = 0;
  }
  add(numb){
    this.result += numb
  }
  subtract(numb){
    this.result -= numb
  }
  multiply(numb){
    this.result *= numb
  }
  divide(numb){
    if(numb ===0) throw new Error("Cannot divide by 0")
    this.result /=numb
  }
  clear(){
    this.result =0;
  }
  getResult(){
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces
    expression = expression.replace(/\s+/g, "");
    // Check for invalid characters
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }
      // Check for division by zero
    if (/\/0(?!\d)/.test(expression)) {
      // looks for /0 NOT followed by a digit like /01
      throw new Error("Division by zero is not allowed");
}

    try {
      this.result = eval(expression);
    } catch (error) {
      throw new Error("Error in evaluating expression");
    }
  }
}
// Example usage:

const calculator = new Calculator()
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult())

module.exports = Calculator;
