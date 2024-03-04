import Toast from '../utils/toastify';
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
      const action = dataset.action;
      const cartItemId = dataset.cartItemId;
      const productId = dataset.productId;

      const amountInputElement = getElementById(`amount-input-${cartItemId}`);
      const productTotalElement = getElementById(`product-total-${cartItemId}`);

      const product = await this.productService.getById(productId);
      const { amount: productAmount } = product;

      const existingCartItem = await this.cartService.getByProductId(productId);

      const { amount: cartItemAmount, price } = existingCartItem ? existingCartItem : {};

      switch(action) {
        case 'increment': {
          if(cartItemAmount >= productAmount) {
            return Toast.error('You cannot add more items!');
          }

          existingCartItem.amount += 1;
          await this.cartService.editById(cartItemId, existingCartItem);

          let amount = parseInt(amountInputElement.value);
          const priceNum = parseFloat(price);
          amountInputElement.value = ++amount;
          const total = (amount * priceNum).toFixed(2);
          productTotalElement.textContent = `$ ${total}`;
          break;
        }
        case 'decrement': {
          if(cartItemAmount === 0) {
            return Toast.error('You cannot remove more items!');
          }

          existingCartItem.amount -= 1;
          await this.cartService.editById(cartItemId, existingCartItem);

          let amount = parseInt(amountInputElement.value);
          const priceNum = parseFloat(price);
          amountInputElement.value = --amount;
          const total = (amount * priceNum).toFixed(2);
          productTotalElement.textContent = `$ ${total}`;

          break;
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
}
