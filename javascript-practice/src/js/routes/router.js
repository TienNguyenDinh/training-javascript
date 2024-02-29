import ProductView from '../views/product.view';
import ProductService from '../services/product.service';
import ProductController from '../controllers/product.controller';
import ProductAddController from '../controllers/product.add.controller';
import ProductDetailController from '../controllers/product-detail.controller';
import { ROUTES } from '../constants/routes';
import findRoute from '../utils/findRoute';

const productView = new ProductView();
const productService = new ProductService();

/**
 * An object that maps route names to their respective handlers
 */
const routes = {
  [ROUTES.HOME]: {
    handler: async () => {
      return new ProductController(productView, productService)
    }
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: () => {
      return new ProductDetailController(productView, productService)
    }
  },
  [ROUTES.ADD_PRODUCT]: {
    handler: () => {
      return new ProductAddController(productView, productService);
    }
  },
  [ROUTES.EDIT_PRODUCT]: {
    handler: () => { }
  }
}

// Add an event listener for clicking all links
// This is necessary because the website is a
// Single Page Application and does not need to reload
// which can lead to a faster user experience
document.addEventListener('click', (e) => {
  const target = e.target;

  // If the clicked element is not a link, exit the function
  if (!target.matches('a')) return;

  e.preventDefault();

  handleRoute({
    target
  });
});

/**
 * Handles route changes. Updates the browser history and triggers a location change
 * @param {EventTarget} target - The link element
 */
function handleRoute({ target, href }) {
  href = href || target

  window.history.pushState(null, '', href);

  handleRouteChange();
}

/**
 * Handles location changes. Matches the current path to a route and calls the route's handler
 */
function handleRouteChange() {
  const pathName = window.location.pathname;
  const {
    route: currentRoute,
    params
  } = findRoute(pathName);
  const route = routes[currentRoute];

  route.handler(params);
}

export { handleRoute, handleRouteChange }
