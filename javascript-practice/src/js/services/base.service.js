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
    return await APIHandler.get(this.endpoint);
  }

  /**
   * Gets a item by its ID
   * @param {string} id - The ID of the item
   * @returns {Promise<Object>} The object contains the item
   */
  async getById(id) {
    return await APIHandler.get(`${this.endpoint}/${id}`);
  }

  /**
   * Add a new item
   * @param {Object} cartItem - the object contains the item
   * @param {Object} result - The result
   */
  async add(cartItem) {
    return await APIHandler.post(this.endpoint, cartItem);;
  }

  /**
   * Edit a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async editById(id, data) {
    return await APIHandler.put(`${this.endpoint}/${id}`, data);
  }

  /**
   * Remove a item by its ID
   * @param {string} id - The ID of the item
   * @param {Object} result - The result
   */
  async removeById(id) {
    return await APIHandler.delete(`${this.endpoint}/${id}`);
  }
}