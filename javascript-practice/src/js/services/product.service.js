// TODO: Implement the add method to add a new product to the API
// TODO: Implement the editById method to update a specific product in the API using its ID
// TODO: Implement the removeById method to delete a specific product from the API using its ID

import { API_ROUTES } from '../constants/url-api';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getAll() {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Gets a product by its ID
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The object contains the product
   */
  async getById(id) {
    const { PRODUCTS_ENDPOINT } = API_ROUTES;
    const endpoint = `${PRODUCTS_ENDPOINT}/${id}`;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Add a new product
   */
  async add() {

  }

  /**
   * Edit a product by its ID
   * @param {string} id - The ID of the product
   */
  async editById(id) {

  }

  /**
   * Delete a product by its ID
   * @param {string} id - The ID of the product
   */
  async deleteById(id) {
    const { PRODUCTS_ENDPOINT } = API_ROUTES;
    const endpoint = `${PRODUCTS_ENDPOINT}/${id}`;

    const data = await APIHandler.delete(endpoint);

    return data;
  }
}
