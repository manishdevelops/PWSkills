/* Conditional statements are programming constructs that allow the execution of different blocks of code based on the evaluation of one or more conditions. These statements help control the flow of a program by making decisions dynamically at runtime.

In JavaScript, there are primarily two types of conditional statements:

1. if...else Statements:

The if...else statement evaluates a condition and executes a block of code if the condition is true. If the condition is false, an optional else block of code is executed.

Syntax: 
if (condition) {
    Block of code to be executed if the condition is true
} else {
    Block of code to be executed if the condition is false
}
*/
// example:
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

/*
2. switch Statement:

The switch statement evaluates an expression and executes a block of code based on the value of the expression. It provides a concise way to compare a value against multiple possible cases.

Syntax:
switch (expression) {
    case value1:
        Block of code to be executed if expression matches value1
        break;
    case value2:
        Block of code to be executed if expression matches value2
        break;
    default:
        Block of code to be executed if expression doesn't match any case
}
*/
//  example:
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    default:
        console.log("It's neither Monday nor Tuesday.");
}

