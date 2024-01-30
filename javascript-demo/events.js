const button2 = document.getElementById('myButton2');
button2.onclick = function () {
  alert('Clicked!');
};

const button3 = document.getElementById('myButton3');
button3.onclick = function () {
  alert('Clicked on ' + this.id);
};

// button3 now has two handlers for being clicked
button3.addEventListener('click', () => alert('Alert again!'));

function saySth() {
  alert('tien day!!!!!!');
}

button3.addEventListener('click', saySth);
button3.removeEventListener('click', saySth);

const newButton = document.getElementById('newButton');

newButton.onclick = function (event) {
  console.log('Event type:' + event.type);
  console.log('Current target:' + event.currentTarget);
  console.log('Coordinates:' + event.clientX + ':' + event.clientY);
};

// Combine handlers into a class
class MyClass {
  handleEvent(event) {
    switch (event.type) {
      case 'mousedown':
        newButton.textContent = 'Mouse button pressed';
        break;
      case 'mouseup':
        newButton.textContent += '...and released.';
        break;
    }
  }
}

let myClassInstance = new MyClass();

newButton.addEventListener('mousedown', myClassInstance);
newButton.addEventListener('mouseup', myClassInstance);

// Bubbling
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.onclick = function () {
  console.log('Clicked on parent');
};

child.onclick = function () {
  console.log('Clicked on child');
};

document.addEventListener('click', (event) => {
  console.log('x: ' + event.clientX);
  console.log('y: ' + event.clientY);
});

button3.addEventListener('click', () => alert('Alert again!'));
button3.addEventListener('click', () => alert('Alert again!'));

function handleMouseDown(event) {
  console.log('Mouse button pressed at ' + event.currentTarget);
}

function handleMouseUp(event) {
  console.log('Mouse button released at ' + event.currentTarget);
}

let elem = document.getElementById('myElement');

elem.addEventListener('mousedown', handleMouseDown);
elem.addEventListener('mouseup', handleMouseUp);