const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}

// Find the average age
const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumOfAges / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average) using abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Range of Ages:", ageRange);
console.log("Difference between Min and Average Age:", minAverageDiff);
console.log("Difference between Max and Average Age:", maxAverageDiff);
