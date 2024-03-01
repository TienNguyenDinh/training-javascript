class Cart {
  /**
   * Represents a cart item
   * @constructor
   * @param {Object} cart - Cart properties
   * + id {number} - The cart item ID
   * + name {string} - The cart item name
   * + price {number} - The cart item price
   * + amount {number} - The cart item amount
   * + imgUrl {imgUrl} - The cart item image url
   */
  constructor(cart) {
    const {
      id,
      name,
      price,
      amount,
      imgUrl
    } = cart;

    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.imgUrl = imgUrl;
  }
}
