export default class ProductController {
  constructor(productView, productService) {
    this.productView = productView;
    this.productService = productService;

    this.displayProducts();
  }

  /**
   * Fetches products from the server and displays them
   */
  async displayProducts() {
    const products = await this.productService.getProducts();

    this.productView.renderProducts(products);
  }

  async addProduct(product) {
    await this.productService.addProduct(product);

    this.productViews.addProduct(product);
  }
}
