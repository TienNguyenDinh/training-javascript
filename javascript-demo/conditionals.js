let temperature = 25;

if (temperature < 0) {
  console.log('Freezing!');
} else if (temperature < 10) {
  console.log('Cold!');
} else if (temperature < 20) {
  console.log('Cool!');
} else if (temperature < 30) {
  console.log('Warm!');
} else {
  console.log('Hot!');
}

let a = 5;
let b = 6;

if (a == 5) {
  a = 6;
}

if (b == 6, a = 7) {
  console.log('b =', b);
}

console.log('a =', a);

let isAdult = true;
let msg = isAdult ? 'Hello adult!' : 'Hello kid!';
console.log(msg);

let age = 15;
let personType = (age < 13) ? 'child' : ((age < 20) ? 'teenager' : 'adult');
console.log(personType);