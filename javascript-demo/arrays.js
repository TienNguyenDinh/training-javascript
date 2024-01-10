// Accessing elements of an array
let animals = ['Dog', 'Cat', 'Bird'];
console.log(`[${animals}][0] = ${animals[0]}`);
console.log(`[${animals}][1] = ${animals[1]}`);
console.log(`[${animals}][2] = ${animals[2]}`);

// Modifying elements
console.log(
  `[${animals}][1] = 'Lion' means ${animals[1]} will be changed 
  to ${animals[1] = 'Lion'} then the new array will be [${animals}]`
);

// Adding new elements
console.log(
  `[${animals}][3] = 'Tiger' means ${animals[3] = 'Lion'} will
  be added to the given index then the new array will be [${animals}]`
);

// Getting array length
console.log(`[${animals}].length = ${animals.length}`);

// Array can contains different types of elements
let mixedArray = ['Hello World!', animals, false, 1];
console.log(`[${mixedArray}]`);

// Accessing the last element of an array
console.log(`[${animals}][animals.length - 1] = ${animals[animals.length - 1]}`);
console.log(`[${animals}].at(-1) = ${animals.at(-1)}`); // it can use negative values but may be not supported in all browsers

// Remove the last element of an array
console.log(
  `[${animals}].pop() will remove the last element then returns 
  ${animals.pop()}, and the new array will be [${animals}]`
);

// Append new element to an array
console.log(
  `[${animals}].push('Deer') will append new element to the [${animals}] then returns
  new array's length: ${animals.push('Deer')}, and the new array will be [${animals}]`
);

// Remove the first element of an array
console.log(
  `[${animals}].shift() will remove the first element of the array
  then returns ${animals.shift()}, and the new array will be [${animals}]`
);

// Using unshift
console.log(
  `[${animals}].unshift('Fox') will append new element
  to the beginning of [${animals}] then returns new array's
  length: ${animals.unshift('Fox')}, and the new array will be [${animals}]`
);

// Cycling array items using for ... of ... (common loop for array)
for (let animal of animals) {
  console.log(animal);
}