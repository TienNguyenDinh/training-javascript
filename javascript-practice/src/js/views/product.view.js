import { IMG_PATH } from '../constants/config';

export default class ProductView {
  /**
   * Creates and displays product list of products on the view.
   *
   * @param {Object[]} products - An array of product objects.
   * @param {string} products[].name - The name of the product.
   * @param {string} products[].imgName - The image name of the product.
   * @param {string} products[].currency - The currency of the product price.
   * @param {number} products[].price - The price of the product.
   */
  displayProducts(products) {
    const productElements = products.map(product => {
      const productItemElement = document.createElement('div');
      productItemElement.className = 'product-item';

      const productImageFigureElement = document.createElement('figure');
      productImageFigureElement.className = 'product-thumbnail';

      const productLinkElement = document.createElement('a');
      productLinkElement.href = 'javascript:void(0)';

      const productImageElement = document.createElement('img');
      productImageElement.src = IMG_PATH.replace('product-image-name', product.imgName);
      productImageElement.alt = product.name;

      productLinkElement.append(productImageElement);
      productImageFigureElement.append(productLinkElement);

      const productDetailElement = document.createElement('div');

      const productNameElement = document.createElement('h2');
      productNameElement.className = 'product-info';
      productNameElement.textContent = product.name;

      const productPriceElement = document.createElement('p');
      productPriceElement.className = 'product-info';
      productPriceElement.textContent = `${product.currency} ${product.price}`;

      productDetailElement.append(productNameElement);
      productDetailElement.append(productPriceElement);

      productItemElement.append(productImageFigureElement);
      productItemElement.append(productDetailElement);

      return productItemElement;
    });

    const productsContainerElement = document.querySelector('.main-products-container');
    productsContainerElement.append(...productElements);
  }
}
