import { API_ROUTES } from '../constants/config';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    try {
      const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

      const data = await APIHandler.get(endpoint);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
