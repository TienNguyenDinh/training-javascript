let unusedUser = new Object();
let user = {};
console.log('initialize a new object', user);

user = {
  name: 'Tien',
}
console.log('assign a new object to user:', user);

user.age = 22;
console.log('add a new property to object:', user);

user['favorite animal'] = 'conheo';
console.log('add a new "multiword" property to object:', user);

user['unused property'] = null;
console.log('add a new "multiword" property to object:', user);

delete user['unused property'];
console.log('delete a property using square brackets in a object', user);

const newProp = "secret";
user[newProp] = "new secret";
console.log('add a new property to object that key is stored in a variable:', user);
console.log(`check if ${newProp} exists in user by writing: ${newProp} in user => ${newProp in user}`);

function User(name, age) {
  this.name = name;
  this.age = age;
}
console.log(`user = User("Tien", 22) will create a new object user with those properties`, user = new User('Tien', 22));

// Objects are copied and stored by reference
const user1 = user;
const user2 = user;
console.log('user1 = user =>', user1);
user1.name = 'Hacker';
console.log('user1.name = "Hacker"; user2 = user =>', user2);

user.run = () => console.log('I am running fast!!!')
user.run();