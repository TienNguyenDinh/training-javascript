import { API_ROUTES } from '../constants/apiRoutes';
import BaseService from './base.service';

export default class ProductService extends BaseService {
  constructor() {
    super(API_ROUTES.PRODUCTS_ENDPOINT);
  }
}
