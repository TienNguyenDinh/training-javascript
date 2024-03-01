// TODO: Implement the bindAddCartBtnEvent method to handle the event of adding a product to the cart

import findRoute from '../utils/findRoute';

export default class ProductDetailController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProductDetail();
  }

  /**
   * Fetches product by id from the server and displays them
   */
  async displayProductDetail() {
    const { params } = findRoute(window.location.pathname);

    const product = await this.service.getById(params.id);

    this.view.renderProduct(product);
  }

  /**
   * Binds events to handle add product to cart
   */
  bindAddCartBtnEvent() {

  }
}
