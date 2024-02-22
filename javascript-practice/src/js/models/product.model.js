import ProductService from '../services/product.services';

class Product {
  constructor(id, name, currency, price, brand, modelName,
    color, formFactor, connectivityTechnology, amount, imgName) {
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
