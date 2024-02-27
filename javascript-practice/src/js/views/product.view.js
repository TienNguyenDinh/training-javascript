import { createNewElement } from '../utils/dom';

export default class ProductView {
  /**
   * Displays product list of products on the view
   * @param {Object[]} products
   */
  displayProducts(products) {
    // Mapping over the products array to create HTML elements for each product
    const productElements = products.map(product => {
      // Creating the main div element for each product
      const productItemElement = createNewElement('div', 'product-item');

      // Creating the figure element for the product image
      const productImageFigureElement = createNewElement('figure', 'product-thumbnail');

      const productLinkAttributes = {
        href: ''
      }
      const productLinkElement = createNewElement('a', '', '', productLinkAttributes);

      // Creating the img element for the product image
      const productImageAttributes = {
        src: product.imgUrl,
        alt: product.name
      }
      const productImageElement = createNewElement('img', '', '', productImageAttributes);

      productLinkElement.append(productImageElement);
      productImageFigureElement.append(productLinkElement);

      // Creating the div element for the product details
      const productDetailElement = createNewElement('div');

      // Creating the h2 element for the product name
      const productNameElement = createNewElement('h2', 'product-info', product.name);

      // Creating the ul element for the product colors
      const productColorsWrapperElement = createNewElement('ul');
      const colorOptionList = this.createColorOptionList(product.colors);
      productColorsWrapperElement.append(...colorOptionList);

      // Creating the p element for the product price
      const productPriceElement = createNewElement('p', 'product-info', `$ ${product.price}`);

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
    const productListElement = createNewElement('ul', 'main-products-container');
    productListElement.append(...productElements);

    mainContent.append(productListElement);
  }

  /**
 * Generates a list of color options for a product
 * @param {Object[]} colors An array of color object.
 * @returns {HTMLElement[]} An array of HTML elements representing color options
 */
  createColorOptionList(colors) {
    const colorOptionList = [];

    for (let color of colors) {
      const colorName = color.name;
        
      const productColorWrapperElement = createNewElement('li');

      // Creating the label element for each color
      const productColorLabelAttributes = {
        'data-color': colorName,
        for: colorName
      }
      const productColorLabelElement = createNewElement('label', 'btn btn-option-color', '', productColorLabelAttributes);

      // Creating the radio button element for each color
      const colorValue = JSON.stringify({
        name: colorName,
        hexCode: color.hexCode
      });
      const productColorInputAttributes = {
        hidden: true,
        type: 'radio',
        id: `color-${colorName}`,
        value: colorValue,
        name: 'color'
      }
      const productColorInputElement = createNewElement('input', '', '', productColorInputAttributes);

      productColorWrapperElement.append(productColorLabelElement, productColorInputElement);

      colorOptionList.push(productColorWrapperElement);
    }

    return colorOptionList;
  }
}
