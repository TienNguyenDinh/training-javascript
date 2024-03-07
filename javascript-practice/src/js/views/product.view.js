import { API_ROUTES } from '../constants/apiRoutes';
import MESSAGES from '../constants/messages';
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

    const { EMPTY_PRODUCT_LIST_HEADING } = MESSAGES;
    const mainContent = getElementById('main-content');

    if (!products || products.length === 0) {
      mainContent.innerHTML = `<h2 class="product-info">${EMPTY_PRODUCT_LIST_HEADING}</h2>`;

      return;
    }

    let productListHTML = '<ul class="main-products-container">';
    // Mapping over the products array to create HTML elements for each product
    products.forEach(product => {
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
            <div class="btn-group-action">
              <button id="btn-delete-${id}" data-id="${id}" class="btn btn-delete btn-primary"></button>
              <a href="/edit-product/${id}" class="btn btn-edit btn-primary">
                <svg height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </a>
            </div>
          </figure>
          <div class="product-details">
            <a href="${productHref}">
              <h2 title="${name}" class="product-title product-info">
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
    productListHTML += '</ul>';

    mainContent.innerHTML += productListHTML;
  }

  /**
   * Renders product form page
   */
  renderProductFormPage(data = {}) {
    this.clearMainContainer();

    const {
      ADD_PRODUCT_HEADING,
      EDIT_PRODUCT_HEADING
    } = MESSAGES;
    const headingPage = Object.keys(data).length === 0 ? ADD_PRODUCT_HEADING : EDIT_PRODUCT_HEADING;

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
            <input value="${name}" data-field="Name" id="name" type="text" class="form-control input-size-md">
            <p data-field-error="Name" class="error-message" id="name-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="price">Price</label>
            <input value="${price}" data-field="Price" id="price" type="text" class="form-control input-size-md">
            <p data-field-error="Price" class="error-message" id="price-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="brand">Brand</label>
            <input value="${brand}" data-field="Brand" id="brand" type="text" class="form-control input-size-md">
            <p data-field-error="Brand" class="error-message" id="brand-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="model-name">Model Name</label>
            <input value="${modelName}" data-field="Model Name" id="model-name" type="text" class="form-control input-size-md">
            <p data-field-error="Model Name" class="error-message" id="modelName-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="color">Color</label>
            <input value="${color}" data-field="Color" id="color" type="text" class="form-control input-size-md">
            <p data-field-error="Color" class="error-message" id="color-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="hex-code">Hex Code</label>
            <input value="${hexCode}" data-field="Hex Code" id="hex-code" type="text" class="form-control input-size-md">
            <p data-field-error="Hex Code" class="error-message" id="hexCode-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="form-factor">Form Factor</label>
            <input value="${formFactor}" data-field="Form Factor" id="form-factor" type="text" class="form-control input-size-md">
            <p data-field-error="Form Factor" class="error-message" id="formFactor-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="connectivity-technology">Connectivity Technology</label>
            <input value="${connectivityTechnology}" data-field="Connectivity Technology" id="connectivity-technology" type="text" class="form-control input-size-md">
            <p data-field-error="Connectivity Technology" class="error-message" id="connectivityTechnology-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="amount">Amount</label>
            <input value="${amount}" data-field="Amount" id="amount" type="text" class="form-control input-size-md">
            <p data-field-error="Amount" class="error-message" id="amount-error"></p>
          </div>
          <div class="flex-column">
            <label class="label-primary" for="image-url">Image URL</label>
            <input value="${imgUrl}" data-field="Image URL" id="image-url" type="text" class="form-control input-size-md">
            <p data-field-error="Image URL" class="error-message" id="imgUrl-error"></p>
          </div>
          <div class="flex-row form-btn-group">
            <a href="/" class="btn btn-cancel btn-primary btn-danger">Cancel</a>
            <button id="submit-button" type="submit" class="btn btn-primary btn-submit">Save</button>
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
      id,
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
          <h2 title="${name}" class="product-title product-info">${name}</h2>
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
          <button id="btn-add-cart" class="btn btn-primary btn-success">Add to Cart</button>
          <input type="hidden" value="${id}" id="product-id" >
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
        'style': `background-color: ${hexCode}`,
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
