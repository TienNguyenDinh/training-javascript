export default class ProductController {
  constructor(productModel, productView, productService) {
    this.productModel = productModel;
    this.productView = productView;
    this.productService = productService;

    this.getProducts();
  }

  /**
   * Fetches products from the server and displays them.
   * @async
   * @returns {Promise<void>} Resolves when products are fetched and displayed.
   */
  async getProducts() {
    const res = await this.productService.fetchProducts();
    const products = res.data;

    this.productModel.setProducts(products);

    this.productView.displayProducts(products);
  }
}
