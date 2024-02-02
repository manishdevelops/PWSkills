// Loops are programming constructs used to repeat a block of code multiple times until a certain condition is met. They are essential for automating repetitive tasks and iterating over collections of data. Loops enable efficient execution of code by reducing redundancy and allowing for dynamic control flow.


// In JavaScript, there are mainly three types of loops:

/*
1. for Loop:
The for loop is used to execute a block of code repeatedly for a specified number of iterations.
Syntax:
for (initialization; condition; iteration) {
    Block of code to be executed
}
*/
// example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// In the example above, the loop initializes i to 0, executes the code block as long as i is less than 5, and increments i by 1 in each iteration.

/*
2. while Loop:
The while loop is used to execute a block of code repeatedly as long as a specified condition is true.
Syntax:
while (condition) {
    Block of code to be executed
}
*/
// example:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// In the example above, the loop executes the code block as long as i is less than 5. The variable i is incremented in each iteration.

/*
3. do...while Loop:
The do...while loop is similar to the while loop, but it executes the code block at least once before checking the condition.
Syntax:
do {
    // Block of code to be executed
} while (condition);
*/
// example:
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
// In the example above, the loop executes the code block at least once and then continues to execute it as long as j is less than 5.