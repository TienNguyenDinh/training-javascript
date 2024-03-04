

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
   * Adds a product by sending a POST request.
   * @param {Object} product - The product data to be added
   * @returns {Promise<Object>} - The object contains a property 'isSuccess' which is a boolean indicating the success of the operation
   */
  async add(product) {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    await APIHandler.post(endpoint, product);
  }

  /**
   * Edit a product by its ID
   * @param {string} id - The ID of the product
   */
  async editById(id, product) {
    const { PRODUCTS_ENDPOINT } = API_ROUTES;
    const endpoint = `${PRODUCTS_ENDPOINT}/${id}`;

    const data = await APIHandler.put(endpoint, product);

    return data;
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

  /**
   * Edits a product
   * @param {Object} product - The product object
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The data returned
   */
  async editProduct(product, id) {
    const { PRODUCTS_ENDPOINT } = API_ROUTES;
    const endpoint = `${PRODUCTS_ENDPOINT}/${id}`;

    const data = await APIHandler.put(endpoint, product);

    return data;
  }
}
