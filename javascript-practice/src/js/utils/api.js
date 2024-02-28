import showToastify from '../utils/toastify';
import { API_ROUTES } from '../constants/config';

const APIHandler = {
  /**
   * Fetches data from an URL and returns the JSON response.
   * If the fetching fails, it shows a toast notification
   * @param {string} endpoint - The endpoint to fetch data from
   */
  async get(endpoint) {
    try {
      const res = await fetch((`${API_ROUTES.BASE_URL}/${endpoint}`));

      if (!res.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);

      showToastify(error.message, 'toastify-danger');
    }
  }
}

export { APIHandler }
