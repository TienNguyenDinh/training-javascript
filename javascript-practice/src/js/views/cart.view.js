// TODO: Implement the renderCart method to render the list of cart items on the page

import { getElementById } from "../utils/dom";

export default class CartView {
  /**
   * Renders list of cart items on the page
   */
  renderCart() {
    const mainContent = getElementById('main-content');

    // Test data
    const cart = [
      {
        name: 'Adidas',
        color: 'Black',
        amount: 2,
        price: 29.99,
        imgUrl: 'https://ik.imagekit.io/kwzzowwcg/samsung-earphones-white.png'
      },
      {
        name: 'Toshiba',
        color: 'White',
        amount: 1,
        price: 49.99,
        imgUrl: 'https://ik.imagekit.io/kwzzowwcg/samsung-earphones-white.png'
      }
    ];

    let cartListHTML = '<ul class="shopping-cart">'
    for (const item of cart) {
      const { name, color, amount, price, imgUrl } = item;
      const totalPrice = amount * price;

      const cartItemHTML = `
       <li class="cart-item">
        <div class="cart-item-image">
          <button type="button" class="btn btn-primary">X</button>
          <figure>
            <img src="${imgUrl}" alt="${name}" />
          </figure>
        </div>
        <div class="cart-item-info">
          <h2 class="product-info">${name}</h2>
          <p class="cart-item-color">${color}</p>
        </div>
        <div class="cart-item-quantity">
          <button class="btn btn-plus" type="button">
            +
          </button>
          <input value="${amount}" disabled type="text" class="form-control input-quantity">
          <button class="btn btn-minus" type="button">
            -
          </button>
        </div>
        <p class="product-info">$ ${totalPrice}</p>
       </li>
      `

      cartListHTML += cartItemHTML;
    }
    cartListHTML += '</ul>'

    mainContent.innerHTML += cartListHTML
  }
}
