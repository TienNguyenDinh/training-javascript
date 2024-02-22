import ProductService from '../services/product.services';

class Product {
  /**
   * Creates a new product.
   * @param {Object} options
   * @param {string} options.id
   * @param {string} options.name
   * @param {string} options.currency
   * @param {number} options.price
   * @param {string} options.brand
   * @param {string} options.modelName
   * @param {string} options.color
   * @param {string} options.formFactor
   * @param {string} options.connectivityTechnology
   * @param {number} options.amount
   * @param {string} options.imgName
   */
  constructor({id, name, currency, price, brand, modelName,
    color, formFactor, connectivityTechnology, amount, imgName}) {
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
    this.imgName = imgName;
  }
}

export default class ProductModel {
  setProducts(products) {
    this.products = products;
  }
}
