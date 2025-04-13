/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Algorithm
    // 1. Initialize a variable to hold the sum.
    // 2. Use a for loop to iterate from 1 to n.
    // 3. In each iteration, add the current number to the sum.
    // 4. Record the start time before the loop.
    // 5. Record the end time after the loop.
    // 6. Calculate the time taken by subtracting the start time from the end time.
    // 7. Return the sum and the time taken.
    // 8. Print the time taken to the console. optional
    const start = Date.now();
    let sum =0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const end = Date.now();
    const timeTaken = (end - start) / 1000; // Convert milliseconds to seconds
    console.log(`Time taken to calculate sum from 1 to ${n} - ${timeTaken} seconds`);
    return sum;
}
// Example usage:
calculateTime(100); // Should be quick
calculateTime(100000); // Should take a bit longer
calculateTime(1000000000); // Should take even longer