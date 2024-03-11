import { API_ROUTES } from '../constants/apiRoutes';
import { APIHandler } from '../utils/api';
import BaseService from './base.service';

export default class CartService extends BaseService {
  constructor() {
    super(API_ROUTES.CART_ENDPOINT);
  }

  /**
   * Gets a cart item by its product ID
   * @param {string} id - The ID of the product
   * @returns {Promise<Object>} The object contains the cart item
   */
  async getByProductId(id) {
    const data = await APIHandler.get(`${API_ROUTES.CART_ENDPOINT}?productId=${id}`);

    return data[0];
  }
}
