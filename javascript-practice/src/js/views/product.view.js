import { API_ROUTES } from '../constants/config';
import { createNewElement } from '../utils/dom';
import { convertCamelCaseToSpaces } from '../utils/convertString';

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
      const productNameElement = createNewElement('h2',
        'product-info product-title', name);
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

  /**
   * Renders a product on the page
   * @param {Object} product - The product to render
   */
  renderProduct(product) {
    const {
      name,
      price,
      colors,
      brand,
      modelName,
      formFactor,
      connectivityTechnology,
      amount,
      imgUrl
    } = product;

    const productImageFigureElement = createNewElement('figure', 'product-preview');

    const productImageAttributes = {
      src: imgUrl,
      alt: name
    }
    const productImageElement = createNewElement('img', '', '',
      productImageAttributes);

    productImageFigureElement.append(productImageElement);

    const productDetailListElement = createNewElement('div');

    const productTitleElement = createNewElement('h2',
      'product-info product-title', product.name);

    // Creating the ul element for the product colors
    const productColorsWrapperElement = createNewElement('ul', 'product-option-colors');
    const colorOptionList = this.createColorOptionList(colors);
    productColorsWrapperElement.append(...colorOptionList);

    const productPriceElement = createNewElement('p',
      'product-info product-price', `$ ${price}`);

    const productDataElement = createNewElement('dl',
      'product-data product-info');
    // Define the product details to be displayed
    const details = {
      brand, modelName, formFactor, connectivityTechnology, amount
    }
    // Loop through each detail and create a row for it
    for (let detail in details) {
      const term = convertCamelCaseToSpaces(detail);
      const desc = convertCamelCaseToSpaces(details[detail]);

      const productInfoRowElement = createNewElement('div',
        'product-info-row');

      const productInfoTermElement = createNewElement('dt',
        'product-info-term', term);

      const productInfoDescElement = createNewElement('dd',
        'product-info-desc', desc);

      productInfoRowElement.append(productInfoTermElement, productInfoDescElement);

      productDataElement.append(productInfoRowElement);
    }

    const addToCartBtnElement = createNewElement('button',
      'btn btn-primary btn-success', 'Add To Cart');

    productDetailListElement.append(
      productTitleElement,
      productColorsWrapperElement,
      productPriceElement,
      productDataElement,
      addToCartBtnElement
    );

    const mainContent = document.getElementById('main-content');

    const productDetailElement = createNewElement('div',
      'container product-detail-container product-detail-section');
    productDetailElement.append(
      productImageFigureElement,
      productDetailListElement
    );

    mainContent.append(productDetailElement);
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
