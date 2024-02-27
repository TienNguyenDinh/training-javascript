import { API_ROUTES } from '../constants/config';
import { API } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    try {
      const fetchProductsEndpoint = API_ROUTES.GET_PRODUCTS_URL;

      const data = await API.handleGet(fetchProductsEndpoint);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
