import ProductView from '../views/product.view';
import ProductService from '../services/product.service';
import ProductController from '../controllers/product.controller';
import { ROUTES } from '../constants/routes';
import findRoute from '../utils/findRoute';

/**
 * An object that maps route names to their respective handlers
 */
const routes = {
  [ROUTES.HOME]: {
    handler: async () => {
      const productView = new ProductView();
      const productService = new ProductService();

      return new ProductController(null, productView, productService)
    }
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: () => { }
  },
  [ROUTES.ADD_PRODUCT]: {
    handler: () => { }
  },
  [ROUTES.EDIT_PRODUCT]: {
    handler: () => { }
  }
}

// Add an event listener for clicking all links
document.addEventListener('click', (e) => {
  const target = e.target;

  // If the clicked element is not a link, exit the function
  if (!target.matches('a')) return;

  // Prevents the browser from reloading since the website is SPA
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
export default function handleRouteChange() {
  const pathName = window.location.pathname;
  const result = findRoute(pathName);
  const route = routes[result.route];

  route.handler(result.params);
}
