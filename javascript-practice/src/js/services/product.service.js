import { API_ROUTES } from '../constants/apiRoutes';
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
    const endpoint = `${API_ROUTES.PRODUCTS_ENDPOINT}/${id}`;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Adds a product by sending a POST request.
   * @param {Object} product - The product data to be added
   * @param {Object} result - The result
   */
  async add(product) {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    const result = await APIHandler.post(endpoint, product);

    return result;
  }

  /**
   * Edit a product by its ID
   * @param {string} id - The ID of the product
   * @param {Object} result - The result
   */
  async editById(id, product) {
    const endpoint = `${API_ROUTES.PRODUCTS_ENDPOINT}/${id}`;

    const result = await APIHandler.put(endpoint, product);

    return result;
  }

  /**
   * Delete a product by its ID
   * @param {string} id - The ID of the product
   * @param {Object} result - The result
   */
  async deleteById(id) {
    const endpoint = `${API_ROUTES.PRODUCTS_ENDPOINT}/${id}`;

    const result = await APIHandler.delete(endpoint);

    return result;
  }
}
