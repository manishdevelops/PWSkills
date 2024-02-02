function extractMatchedParts(pattern, str) {
    let regex = new RegExp(pattern);
    let match = regex.exec(str);

    if (match) {
        let matchedText = match[0];
        let day = match[1];
        let month = match[2];
        let year = match[3];

        return {
            matchedText: matchedText,
            day: day,
            month: month,
            year: year
        };
    } else {
        return null;
    }
}

let inputString = "Today is 22-01-2024, which is a Tuesday.";
let pattern = /(\d{2})-(\d{2})-(\d{4})/;
let result = extractMatchedParts(pattern, inputString);

if (result) {
    console.log("Matched Text:", result.matchedText); // Matched text: 22-01-2024
    console.log("Day:", result.day); // Day: 22
    console.log("Month:", result.month); // Month: 01
    console.log("Year:", result.year); // Year: 2024
} else {
    console.log("No match found.");
}
