import findRoute from '../utils/findRoute';

export default class ProductDetailController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProductById();
  }

  /**
   * Fetches product by id from the server and displays them
   */
  async displayProductById() {
    const { params } = findRoute(window.location.pathname);

    const product = await this.service.getById(params.id);

    this.view.renderProduct(product);
  }
}
