import { productController } from '../main';

import { ROUTES } from '../constants/url-api';

import matchRoute from '../utils/matchRoute';

/**
 * An object that maps route names to their respective handlers
 */
const routes = {
  [ROUTES.HOME]: {
    handler: async () => {
      await productController.displayProducts();
    }
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: () => { }
  },
  [ROUTES.ADD_PRODUCT]: {
    handler: () => {
      productController.displayAddProductPage();
    }
  },
  [ROUTES.EDIT_PRODUCT]: {
    handler: () => { }
  }
}

document.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.matches('a')) return;

  e.preventDefault();

  handleRoute(target);
});

/**
 * Handles route changes. Updates the browser history and triggers a location change
 * @param {EventTarget} target - The link element
 */
function handleRoute(target) {
  window.history.pushState(null, '', target.href);

  handleChangeLocation();
}

/**
 * Handles location changes. Matches the current path to a route and calls the route's handler
 */
export default function handleChangeLocation() {
  const pathName = window.location.pathname;

  const result = matchRoute(pathName);
  const route = routes[result.route];

  route.handler(result.params);
}
