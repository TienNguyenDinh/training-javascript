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

  /**
   * Renders add-product page
   */
  renderAddProductPage() {
    this.productView.displayAddProductPage();
  }
}
