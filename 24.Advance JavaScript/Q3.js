
const Calculator = {
    value: 0,

    add: function (num) {
        this.value += num;
        return this; // Return the object to enable chaining
    },

    subtract: function (num) {
        this.value -= num;
        return this; // Return the object to enable chaining
    },

    multiply: function (num) {
        this.value *= num;
        return this; // Return the object to enable chaining
    },

    divide: function (num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.log('Error: Division by zero');
        }
        return this; // Return the object to enable chaining
    },

    // Reset the value 
    reset: function () {
        this.value = 0;
        return this;
    },

    // Get the current value
    getResult: function () {
        return this.value;
    }
};

Calculator.add(10).subtract(5).multiply(2).divide(5);
console.log(Calculator.getResult()); // Output: 2

Calculator.reset().add(20).multiply(3).subtract(10);
console.log(Calculator.getResult()); // Output: 50
