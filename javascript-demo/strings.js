// We can write string in 3 different ways
const str = 'Hello World!';
const singleQuote = 'Hello World!';
const doubleQuote = "Hello World!";
const backtick = `Hello World!`;

console.log('single quotes:', singleQuote);
console.log('double quotes:', doubleQuote);
console.log('backticks:', backtick);

// We can add expressions inside string wrapped in backticks
const x = 5;
const y = 10;
console.log(`${x} + ${y} = ${x + y}`,);

// How to write string in multilines
const multilineBacktick = `This is
a multiline
string.`;
const multilineQuote = 'This is \na multiline\nstring.';
console.log(multilineBacktick);
console.log(multilineQuote);

// Get length and position of a string
console.log(`"${str}".length = ${str.length}`);
console.log(`The first character of "${str}" is "${str[0]}"`);
console.log(`The last character of "${str}" is "${str[str.length - 1]}"`);
console.log(`The last character of "${str}" is "${str.at(-1)}"`);

/* 
 * Strings are immutable
 * str[0] = newStr; won't work and raise error
 */

// Some methods of string
console.log(`"${str}".indexOf("hel") = ${str.indexOf('hel')}`);
console.log(`"${str}".indexOf("o") = ${str.indexOf('o')}`);
console.log(`"${str}".lastIndexOf("o") = ${str.lastIndexOf('o')}`); // This is similar to indexOf() but searching in reverse order
console.log(`"${str}".includes("he") = ${str.includes('he')}`);
console.log(`"${str}".includes("Wo") = ${str.includes('Wo')}`);
console.log(`"${str}".startsWith("Hel") = ${str.startsWith('Hel')}`);
console.log(`"${str}".startsWith("hel") = ${str.startsWith('hel')}`);
console.log(`"${str}".endsWith("!") = ${str.endsWith('!')}`);
console.log(`"${str}".endsWith("ld") = ${str.endsWith('ld')}`);
console.log(`"${str}".slice(0, 4) = ${str.slice(0, 4)}`); // The most common and flexible way to get a substring from its origin is using slice()
console.log(`"${str.slice(-3)}".slice(-3) = ${str.slice(-3)}`);
console.log('"apple".localeCompare("banana")', 'apple'.localeCompare('banana')); // This method is preferred when we have to compare two strings