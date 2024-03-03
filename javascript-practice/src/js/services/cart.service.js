// TODO: Implement the add method to add a new cart item to the API
// TODO: Implement the editById method to update a specific cart item in the API using its ID
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
   * Add a new cart item
   */
  async add() {

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
