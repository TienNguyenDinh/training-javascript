import { API_ROUTES } from '../constants/config';
import { createNewElement } from '../utils/dom';

export default class ProductView {
  /**
   * Displays product list of products on the view
   * @param {Object[]} products - An array of product objects to be displayed
   */
  renderProducts(products) {
    // Mapping over the products array to create HTML elements for each product
    const productElements = products.map(product => {
      const { PRODUCTS_ENDPOINT } = API_ROUTES;
      const { name, price, colors, imgUrl } = product;

      // Creating the main div element for each product
      const productItemElement = createNewElement('div', 'product-item');

      // Creating the figure element for the product image
      const productImageFigureElement = createNewElement('figure', 'product-thumbnail');

      const productLinkAttributes = {
        href: `/${PRODUCTS_ENDPOINT}/${product.id}`
      }
      const productImageLinkElement = createNewElement('a', '', '', productLinkAttributes);
      const productLinkElement = createNewElement('a', '', '', productLinkAttributes);

      // Creating the img element for the product image
      const productImageAttributes = {
        src: imgUrl,
        alt: name
      }
      const productImageElement = createNewElement('img', '', '', productImageAttributes);

      productImageLinkElement.append(productImageElement);
      productImageFigureElement.append(productImageLinkElement);

      // Creating the div element for the product details
      const productDetailElement = createNewElement('div');

      // Creating the h2 element for the product name
      const productNameElement = createNewElement('h2', 'product-info', name);
      productLinkElement.append(productNameElement);

      // Creating the ul element for the product colors
      const productColorsWrapperElement = createNewElement('ul');
      const colorOptionList = this.createColorOptionList(colors);
      productColorsWrapperElement.append(...colorOptionList);

      // Creating the p element for the product price
      const productPriceElement = createNewElement('p', 'product-info', `$ ${price}`);

      productDetailElement.append(productLinkElement);
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

  r

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
