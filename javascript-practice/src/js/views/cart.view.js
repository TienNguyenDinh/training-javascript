import { getElementById } from '../utils/dom';

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

    if (cart.length === 0) {
      mainContent.innerHTML = '<h2 class="product-info">Your cart is empty.</h2>';

      return;
    }

    let cartListHTML = '<ul class="shopping-cart">'
    for (const item of cart) {
      const { id, productId, name, color, amount, price, imgUrl } = item;

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
          <button data-action="increment" data-cart-item-id="${id}" data-product-id="${productId}" class="btn btn-plus" type="button">
            +
          </button>
          <input id="amount-input-${id}" value="${amount}" disabled type="text" class="form-control input-quantity">
          <button data-action="decrement" data-cart-item-id="${id}" data-product-id="${productId}" class="btn btn-minus" type="button">
            -
          </button>
        </div>
        <p id="product-total-${id}" class="product-info">$ ${totalPrice.toFixed(2)}</p>
       </li>
      `

      cartListHTML += cartItemHTML;
    }
    cartListHTML += '</ul>'

    mainContent.innerHTML += cartListHTML
  }
}
