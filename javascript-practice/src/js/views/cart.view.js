// TODO: Implement the renderCart method to render the list of cart items on the page

import { getElementById } from "../utils/dom";

export default class CartView {
  /**
   * Clears the main content container on the page
   * Effectively removing all of its child elements
   */
  clearMainContainer() {
    const mainContent = getElementById('main-content');
    mainContent.innerHTML = '';
  }

  /**
   * Renders list of cart items on the page
   */
  renderCart(cart) {
    this.clearMainContainer();

    const mainContent = getElementById('main-content');

    let cartListHTML = '<ul class="shopping-cart">'
    for (const item of cart) {
      const { id, name, color, amount, price, imgUrl } = item;
      const totalPrice = amount * price;

      const cartItemHTML = `
       <li class="cart-item">
        <div class="cart-item-image">
          <button id="btn-delete-${id}" data-cart-item-id="${id}" type="button" class="btn btn-primary btn-delete-cart-item">X</button>
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
