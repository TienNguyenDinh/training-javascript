import ProductController from './product.controller';
import ProductModel from '../models/product.model';
import ProductView from '../views/product.view';
import ProductService from '../services/product.services';

import { ROUTES } from '../constants/config';
import createController from '../utils/createController';

const routes = {
  [ROUTES.HOME]: {
    components: {
      Controller: ProductController,
      Model: ProductModel,
      View: ProductView,
      Service: ProductService
    },
    handler: createController
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: changeView()
  }
}

document.addEventListener('click', (e) => {
  const target = e.target;

  if(!target.matches('a')) return;

  e.preventDefault();

  handleRoute(target);
});

function handleRoute(target) {
  window.history.pushState(null, '', target.href);

  handleChangeLocation();
}

export default function handleChangeLocation() {
  const pathName = window.location.pathname;

  const route = routes[pathName];

  route.handler(route.components);
}
