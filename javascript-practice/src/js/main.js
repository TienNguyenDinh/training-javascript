import ProductController from './controllers/product.controller';
import ProductModel from './models/product.model';
import ProductService from './services/product.services';
import ProductView from './views/product.view';

document.addEventListener('DOMContentLoaded', () => {
  const productModel = new ProductModel();
  const productView = new ProductView();
  const productService = new ProductService();
  const productController = new ProductController(productModel, productView, productService);
});
