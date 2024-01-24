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

button3.addEventListener('click', () => alert('Alert again!'));
button3.addEventListener('click', () => alert('Alert again!'));