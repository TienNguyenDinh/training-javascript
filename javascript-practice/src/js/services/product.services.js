const API_BASE_URL = "http://localhost:3000";

class ProductService {
  async handleFetching(url) {
    try {
      const res = await fetch(url);

      if(!res.ok) {
        throw new Error("error");
      }

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

      const data = await this.handleFetching(fetchProductsURL);

      return {
        data,
        error
      }
    } catch(error) {
      console.error(error);
    }
  }
}
