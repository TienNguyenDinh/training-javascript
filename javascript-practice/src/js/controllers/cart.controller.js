import {
  getElementById,
  querySelector,
  querySelectorAll
} from '../utils/dom';
import Toast from '../utils/toastify';
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
    await this.displayCartPage();
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
    const btnPlusElements = querySelectorAll('.btn-plus');
    const btnMinusElements = querySelectorAll('.btn-minus');

    // This function handles the click event of the plus and minus buttons
    const handleModifyAmount = async (e) => {
      const dataset = e.target.dataset;
      const action = dataset.action;
      const cartItemId = dataset.cartItemId;
      const productId = dataset.productId;

      const amountInputElement = getElementById(`amount-input-${cartItemId}`);
      const productTotalElement = getElementById(`product-total-${cartItemId}`);

      // Get the product amount from the product service
      const product = await this.productService.getById(productId);
      const { amount: productAmount } = product;

      // Get the cart item amount and price from the product service
      const existingCartItem = await this.cartService.getByProductId(productId);
      const { amount: cartItemAmount, price } = existingCartItem ? existingCartItem : {};

      switch (action) {
        case 'increment': {
          if (cartItemAmount >= productAmount) {
            return Toast.error('You cannot add more items!');
          }

          // Update the cart item with amount +1
          existingCartItem.amount += 1;
          const { isSuccess } = await this.cartService.editById(cartItemId, existingCartItem);

          if (!isSuccess) {
            return Toast.error('The item is not updated!');
          }

          let amount = parseInt(amountInputElement.value);
          const priceNum = parseFloat(price);
          amountInputElement.value = ++amount;
          const total = (amount * priceNum).toFixed(2);

          productTotalElement.textContent = `$ ${total}`;
          break;
        }
        case 'decrement': {
          if (cartItemAmount === 0) {
            return Toast.error('You cannot remove more items!');
          }

          // Update the cart item with amount -1
          existingCartItem.amount -= 1;
          const { isSuccess } = await this.cartService.editById(cartItemId, existingCartItem);

          if (!isSuccess) {
            return Toast.error('The item is not updated!');
          }

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
    const cartListElement = querySelector('.shopping-cart');

    cartListElement.addEventListener('click', async (e) => {
      const btnDeleteCartItemElement = e.target.classList.contains('btn-delete-cart-item');

      if (btnDeleteCartItemElement) {
        const id = e.target.dataset.cartItemId;

        const { isSuccess } = await this.cartService.removeById(id);

        if (!isSuccess) {
          return Toast.error('This item can\'t be deleted right now!');
        }

        Toast.success('The item is deleted!');
        this.displayCartPage();
      }
    })
  }
}
