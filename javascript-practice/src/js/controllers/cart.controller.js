import {
  getElementById,
  querySelector,
  querySelectorAll,
  addEventListener
} from '../utils/dom';
import Toast from '../utils/toastify';
import { ACTION } from '../constants/action';
import MESSAGES from '../constants/messages';

export default class CartController {
  constructor(view, services) {
    this.view = view;
    this.cartService = services.cartService;
    this.productService = services.productService;
  }

  /**
   * Calls displaying cart page
   */
  async init() {
    await this.cartService.getAll();
    await this.displayCartPage();
  }

  /**
   * Deletes a cart item by its ID after user confirmation
   * @param {string} id - The ID of the cart item to be deleted
   */
  async deleteCartItem(id) {
    const {
      DELETE_CONFIRMATION_MSG,
      DELETE_CART_FAILED_MSG,
      DELETE_CART_SUCCESS_MSG
    } = MESSAGES;

    if (!confirm(DELETE_CONFIRMATION_MSG)) {
      return;
    }

    const { isSuccess } = await this.cartService.removeById(id);

    if (!isSuccess) {
      return Toast.error(DELETE_CART_FAILED_MSG);
    }

    Toast.success(DELETE_CART_SUCCESS_MSG);
    this.displayCartPage();
  }

  /**
   * Fetches cart from the server and displays them
   */
  async displayCartPage() {
    const cart = await this.cartService.getAll();

    this.view.renderCart(cart);
    this.bindDeleteItemBtnEvent();
    this.bindModifyAmountBtnEvent();
  }

  /**
   * Binds event to handle update cart item amount
   */
  bindModifyAmountBtnEvent() {
    const {
      UPDATE_ITEM_FAILED_MSG,
      INCREMENT_CART_FAILED_MSG
    } = MESSAGES;
    const btnPlusElements = querySelectorAll('.btn-plus');
    const btnMinusElements = querySelectorAll('.btn-minus');

    // This function handles the click event of the plus and minus buttons
    const handleModifyAmount = async (e) => {
      const dataset = e.target.dataset;
      const { action, cartItemId, productId } = dataset;

      const amountInputElement = getElementById(`amount-input-${cartItemId}`);
      const productTotalElement = getElementById(`product-total-${cartItemId}`);

      // Get the product amount from the product service
      const product = await this.productService.getById(productId);
      const { amount: productAmount } = product;

      // Get the cart item amount and price from the product service
      const existingCartItem = await this.cartService.getByProductId(productId);
      const { amount: cartItemAmount, price } = existingCartItem ? existingCartItem : {};

      const { INCREMENT, DECREMENT } = ACTION;
      switch (action) {
        case INCREMENT: {
          if (cartItemAmount >= productAmount) {
            return Toast.error(INCREMENT_CART_FAILED_MSG);
          }

          // Update the cart item with amount +1
          existingCartItem.amount += 1;
          const { isSuccess } = await this.cartService.editById(cartItemId, existingCartItem);

          if (!isSuccess) {
            return Toast.error(UPDATE_ITEM_FAILED_MSG);
          }

          let amount = parseInt(amountInputElement.value);
          const priceFloat = parseFloat(price);
          amountInputElement.value = ++amount;
          const total = (amount * priceFloat).toFixed(2);

          productTotalElement.textContent = `$ ${total}`;

          break;
        }
        case DECREMENT: {
          if (cartItemAmount <= 1) {
            return this.deleteCartItem(cartItemId);
          }

          // Update the cart item with amount -1
          existingCartItem.amount -= 1;
          const { isSuccess } = await this.cartService.editById(cartItemId, existingCartItem);

          if (!isSuccess) {
            return Toast.error(UPDATE_ITEM_FAILED_MSG);
          }

          let amount = parseInt(amountInputElement.value);
          const priceFloat = parseFloat(price);
          amountInputElement.value = --amount;
          const total = (amount * priceFloat).toFixed(2);

          productTotalElement.textContent = `$ ${total}`;

          break;
        }
      }
    }

    btnPlusElements.forEach(element => {
      addEventListener(element, 'click', handleModifyAmount);
    });

    btnMinusElements.forEach(element => {
      addEventListener(element, 'click', handleModifyAmount);
    });
  }

  /**
   * Binds event to handle remove item from cart
   */
  bindDeleteItemBtnEvent() {
    const cartListElement = querySelector('.shopping-cart');

    addEventListener(cartListElement, 'click', async (e) => {
      const btnDeleteCartItemElement = e.target.classList.contains('btn-delete-cart-item');

      if (btnDeleteCartItemElement) {
        const id = e.target.dataset.cartItemId;

        this.deleteCartItem(id);
      }
    })
  }
}
