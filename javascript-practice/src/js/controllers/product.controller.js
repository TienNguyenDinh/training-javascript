export default class ProductController {
  constructor(productModel, productView, productService) {
    this.productModel = productModel;
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

  /**
   * Renders add-product page
   */
  displayAddProductPage() {
    this.productView.renderAddProductPage();
  }

  async addProduct(product) {
    await this.productService.addProduct(product);

    this.productViews.addProduct(product);
  }
}
