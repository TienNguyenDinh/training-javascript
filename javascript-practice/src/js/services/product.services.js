const API_BASE_URL = 'http://localhost:3000';

export default class ProductService {
  async handleFetching(url) {
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error('error');
      }

      const data = await res.text();

      return {
        data
      }
    } catch(error) {
      console.error(error);

      return {
        data,
        error
      }
    }
  }

  async fetchProducts() {
    try {
      const fetchProductsURL = `${API_BASE_URL}/products`;
      console.log(fetchProductsURL)
      const data = await this.handleFetching(fetchProductsURL);

      return data;
    } catch(error) {
      console.error(error);
    }
  }
}
