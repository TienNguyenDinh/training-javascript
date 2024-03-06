import Toast from '../utils/toastify';
import { API_ROUTES } from '../constants/apiRoutes';

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
    }
  },

  /**
   * Sends a POST request to the endpoint with the provided product data
   * @param {string} endpoint - The endpoint to which the request should be sent
   * @param {Object} product - The product data to be sent
   */
  async post(endpoint, data) {
    try {
      const res = await fetch(
        `${API_ROUTES.BASE_URL}/${endpoint}`,
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        }
      );

      if(!res.ok) {
        throw new Error(`Failed to post data to ${endpoint}`);
      }

      return {
        isSuccess: true
      }
    } catch(error) {
      console.error(error);

      return {
        isSuccess: false
      }
    }
  },

  /**
   * Sends a PUT request to the specified endpoint
   * @param {string} endpoint - The endpoint to send the PUT request to
   * @param {Object} data - The data of the PUT request
   * @returns {Promise<Object>} The JSON response
   */
  async put(endpoint, data) {
    try {
      const res = await fetch(
        `${API_ROUTES.BASE_URL}/${endpoint}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

      if (!res.ok) {
        throw new Error(`Failed to update data to ${endpoint}`);
      }

      return {
        isSuccess: true
      }
    } catch (error) {
      console.error(error);

      return {
        isSuccess: true
      }
    }
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

      return {
        isSuccess: true
      }
    } catch (error) {
      console.error(error);

      return {
        isSuccess: false
      }
    }
  }
}

export { APIHandler }
