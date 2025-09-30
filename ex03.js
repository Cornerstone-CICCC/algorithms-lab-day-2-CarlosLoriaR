// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.
const findMissingNumber = function (array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index + 1] - array[index] !== 1) {
            return array[index] + 1
        }
    }
}
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3