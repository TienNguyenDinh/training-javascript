import ProductService from '../services/product.services';

class Product {
  constructor(id, name, currency, price, brand, modelName,
    color, formFactor, connectivityTechnology, amount, imgPath) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.price = price;
    this.brand = brand;
    this.modelName = modelName;
    this.color = color;
    this.formFactor = formFactor;
    this.connectivityTechnology = connectivityTechnology;
    this.amount = amount;
    this.imgPath = imgPath;
  }
}

export default class ProductModel {
  constructor() {
    this.productService = new ProductService();
  }

  async getProducts() {
    return await this.productService.fetchProducts();
  }
}
