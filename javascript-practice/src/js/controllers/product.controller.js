import Toast from '../utils/toastify';
import { addEventListener, querySelector } from '../utils/dom';
import MESSAGES from '../constants/messages';

export default class ProductController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  /**
   * Calls displaying products
   */
  async init() {
    await this.displayProducts();
  }

  /**
   * Fetches products from the server and displays them
   */
  async displayProducts() {
    const products = await this.service.getAll();

    this.view.renderProducts(products);

    this.bindDeleteProductEvent();
  }

  /**
   * Binds the delete product event to each delete button
   * If the deletion is successful, it re-displays the products
   */
  bindDeleteProductEvent() {
    const {
      DELETE_PRODUCT_SUCCESS_MSG,
      DELETE_PRODUCT_FAILED_MSG
    } = MESSAGES;
    const productListElement = querySelector('.main-products-container');

    addEventListener(productListElement, 'click', async (e) => {
      const { target } = e;

      if (!target.classList.contains('btn-delete')) {
        return;
      }

      const id = target.dataset.id;

      if (!confirm(MESSAGES.DELETE_CONFIRMATION_MSG)) {
        return;
      }
      const { isSuccess } = await this.service.deleteById(id);

      if (!isSuccess) {
        return Toast.error(DELETE_PRODUCT_FAILED_MSG);
      }

      Toast.success(DELETE_PRODUCT_SUCCESS_MSG);
      this.displayProducts();

    });
  }
}
