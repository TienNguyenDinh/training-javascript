// TODO: Implement the displayCartPage method to fetch cart from the server and display them
// TODO: Implement the bindModifyAmountBtnEvent method to handle the event of updating cart item amount
// TODO: Implement the bindDeleteItemBtnEvent method to handle the event of removing an item from the cart
// TODO: Implement the bindCheckoutBtnEvent method to handle the event of checking out the order

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
    this.view.renderCart();
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

  }

  /**
   * Binds event to handle checkout order
   */
  bindCheckoutBtnEvent() {

  }
}
