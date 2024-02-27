import { API_ENDPOINTS } from '../constants/config';

import { API } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @async
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    try {
      const fetchProductsURL = API_ENDPOINTS.GET_PRODUCTS_URL;

      const data = await API.handleGet(fetchProductsURL);

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
