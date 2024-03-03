// TODO: Implement the bindModifyAmountBtnEvent method to handle the event of updating cart item amount
// TODO: Implement the bindDeleteItemBtnEvent method to handle the event of removing an item from the cart
// TODO: Implement the bindCheckoutBtnEvent method to handle the event of checking out the order

import showToastify from '../utils/toastify';
import { getElementById } from '../utils/dom'

export default class CartController {
  constructor(view, services) {
    this.view = view;
    this.cartService = services.cartService;
    this.productService = services.productService;

    this.displayCartPage();

  }

  /**
   * Fetches cart from the server and displays them
   */
  async displayCartPage() {
    const cart = await this.cartService.getAll();

    this.view.renderCart(cart);
    this.bindModifyAmountBtnEvent();
  }

  /**
   * Binds event to handle update cart item amount
   */
  bindModifyAmountBtnEvent() {
    const btnPlusElements = document.querySelectorAll('.btn-plus');
    const btnMinusElements = document.querySelectorAll('.btn-minus');

    const handleModifyAmount = async (e) => {
      const dataset = e.target.dataset;
      const cartItemId = dataset.cartItemId;
      const productId = dataset.productId;
      const amountInputElement = getElementById(`amount-input-${cartItemId}`);

      const product = await this.productService.getById(productId);
      const { amount: productAmount } = product;

      const existingCartItem = await this.cartService.getByProductId(cartItemId);
      const { cartItemAmount } = existingCartItem;

      if (cartItemAmount < productAmount || cartItemAmount === 1) {
        return showToastify('You cannot add or remove more item!', 'toastify-error');
      }

      const data = await this.cartService.put(id, { ...existingCartItem, amount: amount + 1 });

      if (data.isSuccess) {
        if (dataset.action === 'increment') {
          amountInputElement.value += 1;
        }

        if (dataset.action === 'decrement') {
          amountInputElement.value -= 1
        }
      }
    }

    btnPlusElements.forEach(element => {
      element.addEventListener('click', handleModifyAmount);
    });

    btnMinusElements.forEach(element => {
      element.addEventListener('click', handleModifyAmount);
    });
  }

  /**
   * Binds event to handle remove item from cart
   */
  bindDeleteItemBtnEvent() {

  }

  /**
   * Binds event to handle checkout order
   */
  bindCheckoutBtnEvent() {

  }
}
