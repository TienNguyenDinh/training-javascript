import ProductModel from './models/product.model';
import ProductView from './views/product.view';
import ProductService from './services/product.services';

import ProductController from './controllers/product.controller';

import handleChangeLocation from './controllers/router';

let productController,
    homeController,
    productPageController;

document.addEventListener('DOMContentLoaded', () => {
  const productModel = new ProductModel();
  const productView = new ProductView();
  const productService = new ProductService();

  productController = new ProductController(productModel, productView, productService);

  handleChangeLocation();
});

export { productController,
         homeController,
         productPageController }
