// Exercise 16: Use chaining to double the even numbers and then sum them.
// Example: [3, 10, 15, 7, 22, 18] → 100
// Use method chaining and write the solution in one line

const numbers = [3, 10, 15, 7, 22, 18]
const result = numbers.filter(n => n % 2 === 0).map(n => n * 2).reduce((total, counter) => total += counter, 0)

console.log(
  result
) // Expected output: 100