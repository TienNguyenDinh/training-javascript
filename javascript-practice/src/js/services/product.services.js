import { API_ROUTES } from '../constants/config';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Gets a product by id from the server
   * @returns {Promise<Object>} A product object
   */
  async getProductById(id) {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    const data = await APIHandler.get(`${endpoint}/${id}`);

    return data;
  }
}
