const { sum, sub } = require("./operations");

let num1 = 7;
let num2 = 5;

const sum1 = sum(num1, num2)
console.log(`The sum between ${num1} and ${num2} is equal ${sum1}`);

const sub1 = sub(num1, num2)
console.log(`The substraction between ${num1} and ${num2} is equal ${sub1}`);
