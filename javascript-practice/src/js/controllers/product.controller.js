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
   * Fetches product by id from the server and displays them
   */
  async displayProductById(id) {
    const product = await this.productService.getProductById(id);

    this.productView.renderProduct(product);
  }
}
