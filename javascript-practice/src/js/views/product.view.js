import { API_ROUTES } from '../constants/url-api';
import { createNewElement, getElementById } from '../utils/dom';

export default class ProductView {
  /**
   * Clears the main content container on the page
   * Effectively removing all of its child elements
   */
  clearMainContainer() {
    const mainContent = getElementById('main-content');
    mainContent.innerHTML = '';
  }

  /**
   * Displays product list of products on the view
   * @param {Object[]} products - An array of product objects to be displayed
   */
  renderProducts(products) {
    this.clearMainContainer();

    const mainContent = getElementById('main-content');

    let productListHTML = '<ul class="main-products-container">';
    // Mapping over the products array to create HTML elements for each product
    const productElements = products.map(product => {
      const { PRODUCTS_ENDPOINT } = API_ROUTES;
      const { id, name, price, colors, imgUrl } = product;
      const productHref = `${PRODUCTS_ENDPOINT}/${id}`

      let colorOptionListHtml = ``;

      // Create list of product color element
      const colorOptionList = this.createColorOptionList(colors);

      // Appends color element to list in HTML
      colorOptionList.forEach((colorOptionItem) => {
        colorOptionListHtml += colorOptionItem.outerHTML;
      });

      const productItemHTML = `
        <li class="product-item">
          <figure class="product-thumbnail">
            <a href="${productHref}">
              <img
              src="${imgUrl}" alt="${name}">
            </a>
            <button id="btn-delete-${id}" data-id="${id}" class="btn btn-delete btn-primary"></button>
          </figure>
          <div class="product-details">
            <a href="${productHref}">
              <h2 class="product-title product-info">
                ${name}
              </h2>
            </a>
            <ul class="product-option-colors">
              ${colorOptionListHtml}
            </ul>
            <p class="product-info">$ ${price}</p>
          </div>
        </div>
      `;

      productListHTML += productItemHTML;
    });
    productListHTML += '</ul>'

    mainContent.innerHTML += productListHTML;
  }

  /**
   * Renders product form page
   */
  renderProductFormPage(data = {}) {
    this.clearMainContainer();

    const headingPage = window.location.pathname.replace('/', '').toUpperCase();

    const {
      id,
      name = '',
      price = '',
      colors = '',
      brand = '',
      modelName = '',
      formFactor = '',
      connectivityTechnology = '',
      amount = '',
      imgUrl = ''
    } = data;
    let color = '';
    let hexCode = '';

    if (colors && colors.length > 0) {
      ({ name: color, hexCode } = colors[0]);
    }

    const mainContent = getElementById('main-content');

    mainContent.innerHTML = `
      <div class="container add-product-container">
        <h2 class="main-heading">${headingPage}</h2>
        <form data-product-id="${id}" id="product-form" action="javascript:void(0)" class="form-default add-form">
          <div class="flex-column">
            <label class="label-primary" for="name">Name</label>
            <input value="${name}" id="name" type="text" class="form-control input-size-md">
            <p class="error-message" id="name-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="price">Price</label>
            <input value="${price}" id="price" type="text" class="form-control input-size-md">
            <p class="error-message" id="price-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="brand">Brand</label>
            <input value="${brand}" id="brand" type="text" class="form-control input-size-md">
            <p class="error-message" id="brand-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="model-name">Model Name</label>
            <input value="${modelName}" id="model-name" type="text" class="form-control input-size-md">
            <p class="error-message" id="modelName-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="color">Color</label>
            <input value="${color}" id="color" type="text" class="form-control input-size-md">
            <p class="error-message" id="color-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="hex-code">Hex Code</label>
            <input value="${hexCode}" id="hex-code" type="text" class="form-control input-size-md">
            <p class="error-message" id="hexCode-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="form-factor">Form Factor</label>
            <input value="${formFactor}" id="form-factor" type="text" class="form-control input-size-md">
            <p class="error-message" id="formFactor-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="connectivity-technology">Connectivity Technology</label>
            <input value="${connectivityTechnology}" id="connectivity-technology" type="text" class="form-control input-size-md">
            <p class="error-message" id="connectivityTechnology-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="amount">Amount</label>
            <input value="${amount}" id="amount" type="text" class="form-control input-size-md">
            <p class="error-message" id="amount-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="image-url">Image URL</label>
            <input value="${imgUrl}" id="image-url" type="text" class="form-control input-size-md">
            <p class="error-message" id="imgUrl-error"></p>
          </div>
          <div class="flex-row">
            <button id="submit-button" type="submit" class="btn btn-primary btn-submit">Submit</button>
            <a href="/" class="btn btn-primary btn-danger">Cancel</a>
          </div>
        </form>
      </div>
    `;
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

    const mainContent = getElementById('main-content');

    let colorOptionListHtml = ``;

    // Create list of product color element
    const colorOptionList = this.createColorOptionList(colors);

    // Appends color element to list in HTML
    colorOptionList.forEach((colorOptionItem) => {
      colorOptionListHtml += colorOptionItem.outerHTML;
    });

    mainContent.innerHTML = `
      <div class="container product-detail-container">
        <figure class="product-preview">
          <img src="${imgUrl}" alt="${name}">
        </figure>
        <div class="product-details">
          <h2 class="product-info">${name}</h2>
          <ul id="product-option-colors" class="product-option-colors">
            ${colorOptionListHtml}
          </ul>
          <p class="product-info product-price">${price}</p>
          <dl class="product-data product-info">
            <div class="product-info-row">
              <dt class="product-info-term">Brand</dt>
              <dd class="product-info-value">${brand}</dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Model Name</dt>
              <dd class="product-info-value">${modelName}</dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Color</dt>
              <dd class="product-info-value">${colors[0].name}</dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Form</dt>
              <dd class="product-info-value">${formFactor}</dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Connectivity Technology</dt>
              <dd class="product-info-value">${connectivityTechnology}</dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Amount</dt>
              <dd class="product-info-value">${amount}</dd>
            </div>
          </dl>
          <button class="btn btn-primary btn-success">Add to Cart</button>
        </div>
      </div>
    `;
  }

  /**
   * Generates a list of color options for a product
   * @param {Object[]} colors An array of color object.
   * @returns {HTMLElement[]} An array of HTML elements representing color options
   */
  createColorOptionList(colors) {
    const colorOptionList = [];

    for (let color of colors) {
      const { name, hexCode } = color;

      const productColorWrapperElement = createNewElement({ tag: 'li' });

      // Creating the label element for each color
      const productColorLabelAttributes = {
        'data-color': name,
        for: name
      }
      const productColorLabelElement = createNewElement({
        tag: 'label',
        className: 'btn btn-option-color',
        attributes: productColorLabelAttributes
      });

      // Creating the radio button element for each color
      const colorValue = JSON.stringify({
        name,
        hexCode
      });
      const productColorInputAttributes = {
        hidden: true,
        type: 'radio',
        id: `color-${name}`,
        value: colorValue,
        name: 'color'
      }
      const productColorInputElement = createNewElement({
        tag: 'input',
        attributes: productColorInputAttributes
      });

      productColorWrapperElement.append(
        productColorLabelElement,
        productColorInputElement
      );

      colorOptionList.push(productColorWrapperElement);
    }

    return colorOptionList;
  }


}
