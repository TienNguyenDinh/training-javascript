import ProductController from './controllers/product.controller';
import ProductModel from './models/product.model';
import ProductService from './services/product.service';
import ProductView from './views/product.view';

document.addEventListener('DOMContentLoaded', () => {
  const productView = new ProductView();
  const productService = new ProductService();
  const productController = new ProductController(null, productView, productService);
});
