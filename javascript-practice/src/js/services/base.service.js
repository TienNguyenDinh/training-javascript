import { APIHandler } from '../utils/api';

export default class BaseService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  /**
   * Gets data from the api
   * @returns {Promise<Object[]>} An array of data objects
   */
  async getAll() {
    const endpoint = this.endpoint;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Gets a item by its ID
   * @param {string} id - The ID of the item
   * @returns {Promise<Object>} The object contains the item
   */
  async getById(id) {
    const endpoint = `${this.endpoint}/${id}`;

    const data = await APIHandler.get(endpoint);

    return data;
  }

  /**
   * Add a new item
   * @param {Object} cartItem - the object contains the item
   * @param {Object} result - The result
   */
  async add(cartItem) {
    const endpoint = this.endpoint;

    const result = await APIHandler.post(endpoint, cartItem);

    return result;
  }

  /**
   * Edit a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async editById(id, data) {
    const endpoint = `${this.endpoint}/${id}`;

    const result = await APIHandler.put(endpoint, data);

    return result;
  }

  /**
   * Remove a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async removeById(id) {
    const endpoint = `${this.endpoint}/${id}`;

    const result = await APIHandler.delete(endpoint);

    return result;
  }
}