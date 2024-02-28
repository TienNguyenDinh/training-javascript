import findRoute from '../utils/findRoute';

export default class ProductDetailController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    const { params } = findRoute(window.location.pathname);
    this.displayProductById(params.id);
  }

  /**
   * Fetches product by id from the server and displays them
   */
  async displayProductById(id) {
    const product = await this.service.getProductById(id);

    this.view.renderProduct(product);
  }
}
