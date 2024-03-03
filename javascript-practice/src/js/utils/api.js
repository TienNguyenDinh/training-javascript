// TODO: Implement the post method to send a POST request to the specified endpoint
// TODO: Implement the put method to send a PUT request to the specified endpoint
// TODO: Implement the patch method to send a PATCH request to the specified endpoint
// TODO: Implement the delete method to send a DELETE request to the specified endpoint

import showToastify from '../utils/toastify';
import { API_ROUTES } from '../constants/url-api';

const APIHandler = {
  /**
   * Fetches data from an URL and returns the JSON response.
   * If the fetching fails, it shows a toast notification
   * @param {string} endpoint - The endpoint to fetch data from
   * @returns {Promise<Object>} The JSON response
   */
  async get(endpoint) {
    try {
      const res = await fetch(`${API_ROUTES.BASE_URL}/${endpoint}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }

      const data = res.json();

      return data;
    } catch (error) {
      console.error(error);

      showToastify(error.message, 'toastify-danger');
    }
  },

  /**
   * Sends a POST request to the specified endpoint
   * @param {string} endpoint - The endpoint to send the POST request to
   * @param {Object} data - The data of the POST request
   * @returns {Promise<Object>} The JSON response
   */
  async post(endpoint, data) {

  },

  /**
   * Sends a PUT request to the specified endpoint
   * @param {string} endpoint - The endpoint to send the PUT request to
   * @param {Object} data - The data of the PUT request
   * @returns {Promise<Object>} The JSON response
   */
  async put(endpoint, data) {

  },

  /**
   * Sends a PATCH request to the specified endpoint
   * @param {string} endpoint - The endpoint to send the PATCH request to
   * @param {Object} data - The data of the PATCH request
   * @returns {Promise<Object>} The JSON response
   */
  async patch(endpoint, data) {

  },

  /**
   * Sends a DELETE request to the specified endpoint
   * @param {string} endpoint - The endpoint to send the DELETE request to
   * @returns {Promise<Object>} The JSON response
   */
  async delete(endpoint) {
    try {
      const url = `${API_ROUTES.BASE_URL}/${endpoint}`;

      const res = await fetch(url, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error(`Failed to delete data from ${url}`);
      }

      showToastify('Delete successfully!', 'toastify-success');

      return {
        isSuccess: true
      }
    } catch (error) {
      console.error(error);

      showToastify(error.message, 'toastify-danger');

      return {
        isSuccess: false
      }
    }
  }
}

export { APIHandler }
