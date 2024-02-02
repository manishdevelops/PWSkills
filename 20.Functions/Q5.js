function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 0:", factorial(0)); //  output: 1
console.log("Factorial of 1:", factorial(1)); // output: 1
console.log("Factorial of 5:", factorial(5)); //  output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log("Factorial of 10:", factorial(10)); //  output: 3628800 (10! = 10 * 9 * ... * 1)
