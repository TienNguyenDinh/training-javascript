import { API_ROUTES } from '../constants/apiRoutes';
import { APIHandler } from '../utils/api';

export default class ProductService {
  /**
   * Gets products from the server.
   * @returns {Promise<Object[]>} An array of product objects
   */
  async getAll() {
    const endpoint = API_ROUTES.PRODUCTS_ENDPOINT;

    if (!this.products) {
      this.products = await APIHandler.get(endpoint);
    }

    return this.products;
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
    if (result.isSuccess) {
      this.products.push(product);
    }

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
    if (result.isSuccess) {
      this.products = this.products.map(item =>
        item.id === id
        ?
        { ...product, id }
        :
        item);
    }

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
    if (result.isSuccess) {
      this.products = this.products.filter(item => item.id !== id);
    }

    return result;
  }
}
