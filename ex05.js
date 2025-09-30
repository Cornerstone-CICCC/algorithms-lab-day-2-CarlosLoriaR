// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
const countConsonants = function (string) {
    const letters = string.toLowerCase().split('')
    const vowels = ["a", "e", "i", "o", "u"]

    return letters.reduce((count, current) => {
        if (!vowels.includes(current) && current !== ' ') {
            return count + 1
        } else {
            return count
        }
    }, 0)
}

console.log(countConsonants("hello world")); // Expected output: 7