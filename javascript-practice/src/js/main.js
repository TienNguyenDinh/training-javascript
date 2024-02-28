import ProductView from './views/product.view';
import ProductService from './services/product.service';
import ProductController from './controllers/product.controller';
import handleChangeLocation from './controllers/router';

let productController,
  homeController,
  productPageController;

document.addEventListener('DOMContentLoaded', () => {
  const productView = new ProductView();
  const productService = new ProductService();

  const productController = new ProductController(null, productView, productService);

  handleChangeLocation();
});

export {
  productController,
  homeController,
  productPageController
}
