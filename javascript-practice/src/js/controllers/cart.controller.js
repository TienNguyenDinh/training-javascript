// TODO: Implement the bindModifyAmountBtnEvent method to handle the event of updating cart item amount
// TODO: Implement the bindCheckoutBtnEvent method to handle the event of checking out the order

import { getElementById } from '../utils/dom';
import { APIHandler } from '../utils/api';

export default class CartController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayCartPage();
  }

  /**
   * Fetches cart from the server and displays them
   */
  async displayCartPage() {
    const cart = await this.service.getAll();

    this.view.renderCart(cart);
    this.bindDeleteItemBtnEvent();
  }

  /**
   * Binds event to handle update cart item amount
   */
  bindModifyAmountBtnEvent() {

  }

  /**
   * Binds event to handle remove item from cart
   */
  bindDeleteItemBtnEvent() {
    const btnDeleteCartItemElements = document.querySelectorAll('.btn-delete-cart-item');

    btnDeleteCartItemElements.forEach(element => {
      element.addEventListener('click', async (e) => {
        const id = e.target.dataset.cartItemId;

        const data = await this.service.removeById(id);

        if(data.success === false) {
          return;
        }

        this.displayCartPage();
      });
    });
  }

  /**
   * Binds event to handle checkout order
   */
  bindCheckoutBtnEvent() {

  }
}
