class Product {
  /**
   * Represents a product
   * @constructor
   * @param {Object} product - Product properties
   * @param {number} product.id - The product ID
   * @param {string} product.name - The product name
   * @param {number} product.price - The product price
   * @param {string} product.brand - The product brand
   * @param {string} product.modelName - The product model name
   * @param {Object} product.colors - The product color
   * @param {string} product.formFactor - The product form factor
   * @param {string} product.connectivityTechnology - The product connectivity technology
   * @param {number} product.amount - The available quantity of the product
   * @param {string} product.imgUrl - The image filename for the product
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
