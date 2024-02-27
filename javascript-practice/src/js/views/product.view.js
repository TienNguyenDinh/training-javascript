import getColorOptionList from "./getColorOptionList";

export default class ProductView {
  /**
   * Displays product list of products on the view
   * @param {Object[]} products
   */
  displayProducts(products) {
    // Mapping over the products array to create HTML elements for each product
    const productElements = products.map(product => {
      // Creating the main div element for each product
      const productItemElement = document.createElement('div');
      productItemElement.className = 'product-item';

      // Creating the figure element for the product image
      const productImageFigureElement = document.createElement('figure');
      productImageFigureElement.className = 'product-thumbnail';

      const productLinkElement = document.createElement('a');

      productLinkElement.href = '';

      // Creating the img element for the product image
      const productImageElement = document.createElement('img');
      productImageElement.src = product.imgUrl;
      productImageElement.alt = product.name;

      productLinkElement.append(productImageElement);
      productImageFigureElement.append(productLinkElement);

      // Creating the div element for the product details
      const productDetailElement = document.createElement('div');

      // Creating the h2 element for the product name
      const productNameElement = document.createElement('h2');
      productNameElement.className = 'product-info';
      productNameElement.textContent = product.name;

      // Creating the ul element for the product colors
      const productColorsWrapperElement = document.createElement('ul');
      const colorOptionList = getColorOptionList(product.colors);
      productColorsWrapperElement.append(...colorOptionList);

      // Creating the p element for the product price
      const productPriceElement = document.createElement('p');
      productPriceElement.className = 'product-info';
      productPriceElement.textContent = `$ ${product.price}`;

      productDetailElement.append(productNameElement);
      productDetailElement.append(productColorsWrapperElement);
      productDetailElement.append(productPriceElement);

      productItemElement.append(productImageFigureElement);
      productItemElement.append(productDetailElement);

      return productItemElement;
    });

    // Getting the main content
    const mainContent = document.getElementById('main-content');

    // Creating the ul element for the product list
    const productListElement = document.createElement('ul');
    productListElement.className = 'main-products-container';
    productListElement.append(...productElements);

    mainContent.append(productListElement);
  }
}
