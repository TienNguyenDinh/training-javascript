const x = 5;
const y = 6;
let a = 10;
let b = 10;
let c = 5;

// Addition
const sum = x + y;

// Subtraction
const diff = x - y;

// Product
const product = x * y;

// Division
const quotient = x / y;

// Remainder
const remainder = y % x;

// Exponentiation
const power = x ** y;


// Unary operators
a = +a;
b = -b;
--c;

// Assignment operators
let assignmentResult = 4 * (a = b + 2);

// Comma Operator
let u = (1, 2 + 3, 4);

console.log(`${x} + ${y} =`, sum);
console.log(`${x} - ${y} =`, diff);
console.log(`${x} * ${y} =`, product);
console.log(`${x} / ${y} =`, quotient);
console.log(`${x} % ${y} =`, remainder);
console.log(`${x} ** ${y} =`, power);
console.log(`+${a} =`, a, `${b} =`, b);
console.log(`--${++c} =`, c);
console.log(`4 * (a = ${b} + 2) =`, assignmentResult);
console.log(`(1, 2 + 3, 4) =`, u);