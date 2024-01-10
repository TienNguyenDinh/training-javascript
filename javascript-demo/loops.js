let counter = 0;
let msg = ``;

// while loop
while (counter < 5) {
  msg += `counter: ${counter}, `;
  ++counter;
}
console.log(msg);

// do...while loop
msg = ``;
do {
  msg += `counter: ${counter}, `;
  ++counter;
} while (counter < 5);
console.log(msg);

// for loop
msg = ``;
for (let counter = 0; counter < 5; ++counter) {
  msg += `counter: ${counter}, `;
}
console.log(msg);

// using continue to skip an iteration in a loop, and break to exit a loop
counter = 0;
msg = ``;
while (counter < 5) {
  if (counter === 2) continue;
  if (counter === 3) break;
  
  msg += `counter: ${counter}, `;
  ++counter;
}
console.log(msg);

// Label with nested loop
outer:
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    if (y === 2) {
      break outer;
    }

    console.log(`x: ${x}, y: ${y}`);
  }
}