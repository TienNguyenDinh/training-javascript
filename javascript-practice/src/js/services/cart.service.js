import { API_ROUTES } from '../constants/apiRoutes';
import { APIHandler } from '../utils/api';

export default class CartService {
  /**
   * Gets cart from the api
   * @returns {Promise<Object[]>} An array of cart item objects
   */
  async getAll() {
    const endpoint = API_ROUTES.CART_ENDPOINT;

    if (!this.cart) {
      this.cart = await APIHandler.get(endpoint);
    }

    return this.cart;
  }

  /**
   * Gets a cart item by its product ID
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The object contains the cart item
   */
  async getByProductId(id) {
    const endpoint = `${API_ROUTES.CART_ENDPOINT}?productId=${id}`;

    const data = await APIHandler.get(endpoint);

    return data[0];
  }

  /**
   * Add a new cart item
   * @param {Object} cartItem - the object contains the cart item
   * @param {Object} result - The result
   */
  async add(cartItem) {
    const endpoint = API_ROUTES.CART_ENDPOINT;

    const result = await APIHandler.post(endpoint, cartItem);
    if (result.isSuccess) {
      this.cart.push(cartItem);
    }

    return result;
  }

  /**
   * Edit a cart item by its ID
   * @param {string} id - The ID of the cart item
   * @param {Object} result - The result
   */
  async editById(id, data) {
    const endpoint = `${API_ROUTES.CART_ENDPOINT}/${id}`;

    const result = await APIHandler.put(endpoint, data);
    if (result.isSuccess) {
      this.cart = this.cart.map(item =>
        item.id === id
        ?
        { ...data, id }
        :
        item);
    }

    return result;
  }

  /**
   * Remove a cart item by its ID
   * @param {string} id - The ID of the cart item
   * @param {Object} result - The result
   */
  async removeById(id) {
    const endpoint = `${API_ROUTES.CART_ENDPOINT}/${id}`;

    const result = await APIHandler.delete(endpoint);
    if (result.isSuccess) {
      this.cart = this.cart.filter(item => item.id !== id);
    }

    return result;
  }
}
