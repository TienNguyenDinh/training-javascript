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
   * Getches a product by its ID
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The object contains the product
   */
  async getById(id) {
    const endpoint = `products/${id}`;

    const data = await APIHandler.get(endpoint);

    return data;
  }
}
