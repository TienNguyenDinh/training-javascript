import { API_ROUTES } from '../constants/url-api';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getProducts() {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Adds a product by sending a POST request.
   * @param {Object} product - The product data to be added
   * @returns {Promise<Object>} - The object contains a property 'isSuccess' which is a boolean indicating the success of the operation
   */
  async addProduct(product) {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    APIHandler.post(endpoint, product);
  }
}
