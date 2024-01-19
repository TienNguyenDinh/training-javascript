setTimeout(example, 4000);

function example() {
  const items = document.querySelectorAll('#items .item');

  for (let i = 0; i < items.length; i++) {
    const price = items[i].querySelector('.price').value;

    const quantity = items[i].querySelector('.quantity').value;

    console.log('Item ' + (i + 1) + ':');
    console.log('Price: ' + price);
    console.log('Quantity: ' + quantity);
  }

  for (let i = 0; i < items.length; i++) {
    const priceInput = items[i].querySelector('.price');

    priceInput.setAttribute('value', '30');
    console.log('priceInput after being changed: ', priceInput.value);

    const quantityInput = items[i].querySelector('.quantity');

    quantityInput.setAttribute('value', '3');
    console.log('quantityInput after being changed: ', quantityInput.value);
  }
}