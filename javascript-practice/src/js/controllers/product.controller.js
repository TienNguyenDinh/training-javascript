export default class ProductController {
  constructor(productModel, productView, productService) {
    this.productModel = productModel;
    this.productView = productView;
    this.productService = productService;

    this.getProducts();
  }

  /**
   * Fetches products from the server and displays them
   * @async
   */
  async getProducts() {
    const products = await this.productService.getProducts();

    this.productView.displayProducts(products);
  }
}
