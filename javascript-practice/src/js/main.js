<<<<<<< HEAD
=======
import ProductController from './controllers/product.controller';
import ProductModel from './models/product.model';
import ProductService from './services/product.service';
>>>>>>> feature/add-display-products
import ProductView from './views/product.view';
import ProductService from './services/product.services';
import ProductController from './controllers/product.controller';
import handleChangeLocation from './controllers/router';

let productController,
  homeController,
  productPageController;

document.addEventListener('DOMContentLoaded', () => {
  const productView = new ProductView();
  const productService = new ProductService();
<<<<<<< HEAD

  productController = new ProductController(productModel, productView, productService);

  handleChangeLocation();
=======
  const productController = new ProductController(null, productView, productService);
>>>>>>> feature/add-display-products
});

export {
  productController,
  homeController,
  productPageController
}
