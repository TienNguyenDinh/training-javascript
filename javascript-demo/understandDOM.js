setTimeout(example, 4000);

function example() {
  const items = document.querySelectorAll('#items .item');
  const price = document.querySelector('.price');
  const content = document.querySelector('#content');

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

  console.log(
    'Live collection created using getElementsByClassName:',
    document.getElementsByClassName('price')
  );
  console.log(
    'Static collection created using querySelectorAll:',
    document.querySelectorAll('.price')
  );

  console.log('Parent of the first .price is: ', price);

  console.log(
    'The item-2 can be accessed by using the id name as a variable',
    ['item-2']
  );

  console.log('nodeName of price is:', price.nodeName);
  
  console.log('Full HTML of content is:', content.outerHTML);
  console.log('HTML of content is:', content.innerHTML);
  console.log('Text of content is:', content.textContent);

  console.log('ID of .items is:', document.querySelector('#items').id);
  console.log('Useful info of content is:', content.getAttribute('useful-info'));
  console.log(
    'Another useful info of content is:', 
    content.dataset.usefulInfo
  );
}