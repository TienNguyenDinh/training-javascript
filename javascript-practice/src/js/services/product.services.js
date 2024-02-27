import { API_ROUTES } from '../constants/config';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    try {
      const fetchProductsEndpoint = API_ROUTES.GET_PRODUCTS_URL;

      const data = await APIHandler.get(fetchProductsEndpoint);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
