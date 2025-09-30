// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.
const countWordOccurrences = function (string, search) {
    let words = string.split(' ')
    return words.reduce((counter, current) => current === search ? counter + 1 : counter, 0)
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2