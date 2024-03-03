import Toast from '../utils/toastify';
import { API_ROUTES } from '../constants/url-api';

const APIHandler = {
  /**
   * Fetches data from an URL and returns the JSON response.
   * If the fetching fails, it shows a toast notification
   * @param {string} endpoint - The endpoint to fetch data from
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

      Toast.error(error.message);
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

      Toast.success('Data added successfully!');
    } catch(error) {
      console.error(error);

      Toast.error(error.message);
    }
  }
}

export { APIHandler }
