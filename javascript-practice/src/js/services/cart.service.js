// TODO: Implement the removeById method to delete a specific cart item from the API using its ID

import { API_ROUTES } from '../constants/url-api';
import { APIHandler } from '../utils/api';

export default class CartService {
  /**
   * Gets cart from the api
   * @returns {Promise<Object[]>} An array of cart item objects
   */
  async getAll() {
    const endpoint = API_ROUTES.CART_ENDPOINT;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Gets a cart item by its product ID
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The object contains the cart item
   */
  async getByProductId(id) {
    const { CART_ENDPOINT } = API_ROUTES;
    const endpoint = `${CART_ENDPOINT}?productId=${id}`;

    const data = await APIHandler.get(endpoint);

    return data[0];
  }

  /**
   * Add a new cart item
   * @param {Object} cartItem - the object contains the cart item
   */
  async add(cartItem) {
    const endpoint = API_ROUTES.CART_ENDPOINT;

    await APIHandler.post(endpoint, cartItem);
  }

  /**
   * Edit a cart item by its ID
   * @param {string} id - The ID of the cart item
   * @param {Object} data - New data to be updated
   */
  async editById(id, data) {
    const { CART_ENDPOINT } = API_ROUTES;
    const endpoint = `${CART_ENDPOINT}/${id}`;

    const returningData = await APIHandler.put(endpoint, data);

    return returningData;
  }

  /**
   * Remove a cart item by its ID
   * @param {string} id - The ID of the cart item
   */
  async removeById(id) {

  }
}
