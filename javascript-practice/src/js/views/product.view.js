import { API_ROUTES } from '../constants/config';
import { createNewElement } from '../utils/dom';

export default class ProductView {
  // Remove every element on main-content
  cleanView() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
  }

  /**
   * Displays product list of products on the view
   * @param {Object[]} products - An array of product objects to be displayed
   */
  renderProducts(products) {
    this.cleanView();

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

    const mainContent = document.getElementById('main-content');

    // Creating the ul element for the product list
    const productListElement = createNewElement('ul', 'main-products-container');
    productListElement.append(...productElements);

    mainContent.append(productListElement);
  }

  /**
   * Renders the 'Add New Product' page on the main content
   * The page includes a form for adding a new product with fields
   */
  renderAddProductPage() {
    this.cleanView();

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <div class="container add-product-container">
        <h2 class="main-heading">Add New Product</h2>
        <form action="javascript:void(0)" class="form-default add-form">
          <div class="flex-column">
            <label class="label-primary" for="name">Name</label>
            <input id="name" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="name">Price</label>
            <input id="price" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="brand">Brand</label>
            <input id="brand" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="model">Model Name</label>
            <input id="model-name" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="color">Color</label>
            <input id="color" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="color">Hex code</label>
            <input id="hex-code" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="form-factor">Form Factor</label>
            <input id="form-factor" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="connectivity-technology">Connectivity Technology</label>
            <input id="connectivity-technology" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="amount">Amount</label>
            <input id="amount" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-row">
            <button type="submit" id="btn-add-product" class="btn btn-primary btn-submit">Submit</button>
            <a href="/" type="button" class="btn btn-primary btn-danger">Cancel</a>
          </div>
        </form>
      </div>
    `
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
