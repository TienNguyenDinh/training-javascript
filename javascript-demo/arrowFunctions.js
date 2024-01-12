// We can omit the parentheses of the block code if there is only one statement
let a = 5;
let b = 4;
const sum = (a, b) => a + b; // implicit 'return'
console.log(`sum(${a}, ${b}) = ${sum(a, b)}`);

// We can omit the parentheses around the parameters if there is only one parameter
const getYourIQ = a => a - 5;
console.log(`getYourIQ(${a}) = ${getYourIQ(a)}`);

// arrow functions do not have their own this
const user = {
  userMethod() {
    console.log('this:', this); // 'this' refers to 'user' the one calls it

    const myArrowFunction = () => {
      console.log('this:', this); // 'this' still refers to 'user' but it is inherited from the parent scope
    };
    myArrowFunction();
  }
};

user.userMethod();

