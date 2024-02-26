import { productController, homeController, productPageController } from '../main';

import { ROUTES } from '../constants/config';

import matchRoute from '../utils/matchRoute';

const routes = {
  [ROUTES.HOME]: {
    handler: async () => {
      await productController.getProducts();
    }
  },
  [ROUTES.PRODUCT_DETAIL]: {
    handler: async (params) => {
      const id = params.id;

      await productController.setProductById(id);

      await productPageController.render();
    }
  },
  [ROUTES.ADD_PRODUCT]: {
    handler: () => {
      productController.renderAddProductPage();
    }
  },
  [ROUTES.EDIT_PRODUCT]: {
    handler: async (params) => {
      const id = params.id;

      await productController.setProductById(id);

      productController.renderEditProductPage();
    }
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

  const result = matchRoute(pathName);
  const route = routes[result.route];

  route.handler(result.params);
}
