export default class ProductController {
  constructor(productModel, productView) {
    this.productModel = productModel;
    this.productView = productView;

    this.getAndDisplayProducts();
  }

  async getAndDisplayProducts() {
    const products = await this.productModel.getProducts();
    
    this.productView.displayProducts(products);
  }
}