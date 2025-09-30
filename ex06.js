// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.
const getQueryParams = function (url) {
    let params = url.split('?')
    let param2 = params[1].split('&')
    let obj = {}
    for (let i = 0; i < param2.length; i++) {
        let [key, value] = param2[i].split('=')
        obj[key] = value
    }
    return obj
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }