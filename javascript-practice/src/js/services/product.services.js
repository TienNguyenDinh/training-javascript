import { API_BASE_URL } from '../constants/config';

import { handleFetching } from '../utils/api';

export default class ProductService {
  constructor() {
    this.handleFetching = handleFetching;
  }

  async fetchProducts() {
    try {
      const fetchProductsURL = `${API_BASE_URL}/products`;

      const data = await this.handleFetching(fetchProductsURL);

      return data;
    } catch(error) {
      console.error(error);
    }
  }
}
