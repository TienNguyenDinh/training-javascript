class Product {
  /**
   * Represents a product
   * @constructor
   * @param {Object} product - Product properties
   * + id {number} - The product ID
   * + name {string} - The product name
   * + price {number} - The product price
   * + brand {string} - The product brand
   * + modelName {string} - The product model name
   * + colors {Object[]} - The product color
   * + formFactor {string} - The product form factor
   * + connectivityTechnology {string} - The product connectivity technology
   * + amount {number} - The available quantity of the product
   * + imgUrl {string} - The image filename for the product
   */
  constructor(product) {
    const { id, name, price, brand, modelName,
      colors, formFactor, connectivityTechnology, amount, imgUrl } = product;

    this.id = id;
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.modelName = modelName;
    this.colors = colors;
    this.formFactor = formFactor;
    this.connectivityTechnology = connectivityTechnology;
    this.amount = amount;
    this.imgUrl = imgUrl;
  }
}
