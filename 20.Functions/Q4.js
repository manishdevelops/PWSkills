function calculateTax() {
    // Define tax rates based on income ranges using closure
    function getTaxRate(income) {
        if (income <= 50000) {
            return 0.1; // 10% tax rate for income up to $50,000
        } else if (income <= 100000) {
            return 0.2; // 20% tax rate for income between $50,001 and $100,000
        } else {
            return 0.3; // 30% tax rate for income above $100,000
        }
    }

    // Return a function that calculates tax based on income
    return function (income) {
        let taxRate = getTaxRate(income);
        return income * taxRate;
    };
}

// Test the function with various incomes
let calculateTaxForIncome = calculateTax();

// Test with different incomes
let income1 = 40000;
let income2 = 75000;
let income3 = 120000;

console.log("Tax for income $40,000:", calculateTaxForIncome(income1));
console.log("Tax for income $75,000:", calculateTaxForIncome(income2));
console.log("Tax for income $120,000:", calculateTaxForIncome(income3));
