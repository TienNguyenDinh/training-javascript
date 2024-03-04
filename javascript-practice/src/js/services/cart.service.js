// TODO: Implement the getAll method to fetch all cart items from the API
// TODO: Implement the add method to add a new cart item to the API
// TODO: Implement the editById method to update a specific cart item in the API using its ID

import { API_ROUTES } from '../constants/url-api'

export default class CartService {
  /**
   * Gets cart from the api
   * @returns {Promise<Object[]>} An array of cart item objects
   */
  async getAll() {

  }

  /**
   * Add a new cart item
   */
  async add() {

  }

  /**
   * Edit a cart item by its ID
   * @param {string} id - The ID of the cart item
   */
  async editById(id) {

  }

  /**
   * Remove a cart item by its ID
   * @param {string} id - The ID of the cart item
   */
  async removeById(id) {
    const { CART_ENDPOINT } = API_ROUTES;
    const endpoint = `${CART_ENDPOINT}/${id}`;

    const data = await APIHandler.delete(endpoint);

    return data;
  }
}
