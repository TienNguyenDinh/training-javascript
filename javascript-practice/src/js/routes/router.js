import ProductView from '../views/product.view';
import ProductService from '../services/product.service';
import ProductController from '../controllers/product.controller';
import ProductFormController from '../controllers/product-form.controller';
import ProductDetailController from '../controllers/product-detail.controller';
import CartView from '../views/cart.view';
import CartService from '../services/cart.service';
import CartController from '../controllers/cart.controller';
import { ROUTES } from '../constants/routes';
import { ACTION } from '../constants/action';
import findRoute from '../utils/findRoute';
import { addEventListener } from '../utils/dom';

const productView = new ProductView();
const productService = new ProductService();

const cartView = new CartView();
const cartService = new CartService();

const productDetailServices = {
  productService,
  cartService
}

const productController = new ProductController(productView, productService);
const productDetailController = new ProductDetailController(productView, productDetailServices);
const productFormAddController = new ProductFormController(productView, productService, ACTION.ADD);
const productFormEditController = new ProductFormController(productView, productService, ACTION.EDIT);
const cartController = new CartController(cartView, productDetailServices);

/**
 * An object that maps route names to their respective handlers
 */
const routes = {
  [ROUTES.HOME]: {
    handler: () => productController
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: () => productDetailController
  },
  [ROUTES.ADD_PRODUCT]: {
    handler: () => productFormAddController
  },
  [ROUTES.EDIT_PRODUCT]: {
    handler: () => productFormEditController
  },
  [ROUTES.CART]: {
    handler: () => cartController
  }
}

// Add an event listener for clicking all links
// This is necessary because the website is a
// Single Page Application and does not need to reload
// which can lead to a faster user experience
addEventListener(document, 'click', (e) => {
  const target = e.target.closest('a');

  // If the clicked element is not a link, exit the function
  if (!target || !target.matches('a')) return;

  const url = target.getAttribute('href');
  if (!url.startsWith('http')) {
    e.preventDefault();

    handleRoute({
      target
    });
  }
});

/**
 * Handles route changes. Updates the browser history and triggers a location change
 * @param {EventTarget} target - The link element
 */
function handleRoute({ target, href }) {
  const newHref = href || target;

  window.history.pushState(null, '', newHref);

  handleRouteChange();
}

/**
 * Handles location changes. Matches the current path to a route and calls the route's handler
 */
async function handleRouteChange() {
  const pathName = window.location.pathname;
  const {
    route: currentRoute,
    params
  } = findRoute(pathName);
  const route = routes[currentRoute];

  const controller = route.handler(params);
  await controller.init();
}

export { handleRoute, handleRouteChange }
