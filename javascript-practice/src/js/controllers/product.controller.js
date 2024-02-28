export default class ProductController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProducts();
  }

  /**
   * Fetches products from the server and displays them
   */
  async displayProducts() {
    const products = await this.service.getProducts();

    this.view.renderProducts(products);
  }
}
