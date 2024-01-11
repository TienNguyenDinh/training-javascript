// Class declaration
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise');
  }
}

let animal = new Animal('Cat');
animal.speak();

// Class inheritance
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks');
  }
}

let dog = new Dog('Shiba');
dog.speak();

// Using super in a class
class Cat extends Animal {
  constructor(name, scream) {
    super(name);
    this.scream = scream;
  }

  speak() {
    super.speak();
    console.log(this.scream);
  }
}

let cat = new Cat('Tom', 'MEOOOOOOOOOOOOW');
cat.speak();

// Class expression
let Mobile = class {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    console.log('Mobile brand: ' + this.brand);
  }
};

let mobile = new Mobile('Apple');
mobile.getBrand();

// Accessor methods: getters and setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get dimensions() {
    return this.width + 'x' + this.height;
  }

  set dimensions(value) {
    [this.width, this.height] = value.split('x');
  }

  get area() {
    return this.width * this.height;
  }

  get result() {
    return `Area of a ${this.dimensions} rectangle is ${this.area}`;
  }
}

let rectangle = new Rectangle(5, 10);
console.log(rectangle.result);
rectangle.dimensions = '7x12';
console.log(rectangle.result);

// Computed method names
class Cat extends Animal {
  ['say' + 'Hello']() {
    console.log('Hello!');
  }
}

let kari = new Cat();
kari.sayHello();