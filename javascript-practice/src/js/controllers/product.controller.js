export default class ProductController {
  constructor(productModel, productView, productService) {
    this.productModel = productModel;
    this.productView = productView;
    this.productService = productService;
  }

  /**
   * Fetches products from the server and displays them
   */
  async displayProducts() {
    const products = await this.productService.getProducts();

    this.productView.renderProducts(products);
  }

  displayAddProductPage() {
    this.productView.renderAddProductPage();
  }
}
