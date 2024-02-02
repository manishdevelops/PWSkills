function matchPattern(pattern, str) {
    let regex = new RegExp(pattern);
    return regex.test(str);
}

console.log(matchPattern(/[a-z]+/, "hello")); // true, pattern matches the lowercase letters in "hello"
console.log(matchPattern(/\d+/, "123")); // true, pattern matches the digits in "123"
console.log(matchPattern(/hello/, "world")); // false, pattern does not match "world"
console.log(matchPattern(/^[a-zA-Z0-9]+$/, "abc123")); // true, pattern matches alphanumeric characters in "abc123"
console.log(matchPattern(/^[a-zA-Z0-9]+$/, "abc123!")); // false, pattern does not match "abc123!"
