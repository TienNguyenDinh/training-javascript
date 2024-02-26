export default class ProductView {
  /**
   * Displays product list of products on the view.
   *
   * @param {Product[]} products
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
      productImageElement.src = product.imgUrl;
      productImageElement.alt = product.name;

      productLinkElement.append(productImageElement);
      productImageFigureElement.append(productLinkElement);

      const productDetailElement = document.createElement('div');

      const productNameElement = document.createElement('h2');
      productNameElement.className = 'product-info';
      productNameElement.textContent = product.name;

      const productPriceElement = document.createElement('p');
      productPriceElement.className = 'product-info';
      productPriceElement.textContent = `$ ${product.price}`;

      productDetailElement.append(productNameElement);
      productDetailElement.append(productPriceElement);

      productItemElement.append(productImageFigureElement);
      productItemElement.append(productDetailElement);

      return productItemElement;
    });

    const mainContent = document.getElementById('main-content');

    const productListElement = document.createElement('ul');
    productListElement.className = 'main-products-container';
    productListElement.append(...productElements);

    mainContent.append(productListElement);
  }
}
