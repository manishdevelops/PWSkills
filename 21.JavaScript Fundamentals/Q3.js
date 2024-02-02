function findCharacterClasses(str) {
    let digitPattern = /\d/g;
    let uppercasePattern = /[A-Z]/g;
    let lowercasePattern = /[a-z]/g;
    let specialCharPattern = /[^a-zA-Z0-9\s]/g;

    let digits = str.match(digitPattern) || [];
    let uppercaseLetters = str.match(uppercasePattern) || [];
    let lowercaseLetters = str.match(lowercasePattern) || [];
    let specialChars = str.match(specialCharPattern) || [];

    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialChars: specialChars
    };
}

let inputString = "Hello123! World";
let matches = findCharacterClasses(inputString);

console.log("Digits:", matches.digits); // Matches: ["1", "2", "3"]
console.log("Uppercase Letters:", matches.uppercaseLetters); // Matches: ["H", "W"]
console.log("Lowercase Letters:", matches.lowercaseLetters); // Matches: ["e", "l", "l", "o", "o", "r", "l", "d"]
console.log("Special Characters:", matches.specialChars); // Matches: ["!"]
