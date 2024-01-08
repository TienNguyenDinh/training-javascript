let a = 1;
let b = 2;

// Multiplication has higher precedence than addition
console.log(`${a} + ${b} * ${b} =`, a + b * b);

// Parentheses has the highest precedence
console.log(`(${a} + ${b}) * ${b} =`, (a + b) * b);

// Unary plus has higher precedence than binary plus
console.log(`+${a} + -${b} =`, +a + -b);

// Assignment has lower precedence than math operations
console.log(`${a} + (${b} = ${a} + ${b})`, a + (b = a + b)); // b = 3 now