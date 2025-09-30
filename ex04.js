// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".
const mostFrequentChar = function (string) {
    let letters = string.split('')
    let obj = {}

    for (let index = 0; index < letters.length; index++) {
        if (obj[letters[index]]) {
            obj[letters[index]] += 1
        } else {
            obj[letters[index]] = 1
        }
    }

    let maxCount = 0
    let maxChar = ''

    for (let char in obj) {
        if (obj[char] > maxCount) {
            maxCount = obj[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"