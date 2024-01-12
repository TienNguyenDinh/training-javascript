// Set timeout 1
console.log('Hello');
setTimeout(function() {
    console.log('World!');
}, 2000);
console.log('How are you?');

// Set timeout 2
console.log('fired first');
console.log('fired second');
setTimeout(()=>{
  console.log('fired third');
},2000);
console.log('fired last');

// Promise 1
let myPromise = new Promise(function(myResolve, myReject) {
  let isSuccessful = true;
  
  if(isSuccessful) {
    myResolve('Operation was successful.'); // when successful
  } else {
    myReject('Operation failed.'); // when error
  }
});

myPromise.then(
  function(value) { console.log('Success: ' + value); },
  function(error) { console.log('Error: ' + error); }
);

// Promise 2
const getData = (successRate = 0.5, latency = 1000) => new Promise((resolve, reject) => {
  const successRoll = Math.random();

  const data = { message: 'Hello, world!' };

  if (successRoll <= successRate) {
    setTimeout(() => resolve(data), latency);
  } else {
    setTimeout(() => reject('API failed to return data'), latency);
  }
});

getData()
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Promise chaining
new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
  .then(result => {
    console.log(result); // 1
    
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
}).then(result => {
    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
}).then(result => console.log(result)); // 4