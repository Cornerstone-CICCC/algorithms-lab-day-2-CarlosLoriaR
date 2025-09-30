// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".
const capitalizeWords = function (string) {
    const words = string.split(' ')
    const test = words.map(word => word[0].toUpperCase() + word.slice(1))
    return test
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"