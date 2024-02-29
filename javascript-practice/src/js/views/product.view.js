import { API_ROUTES } from '../constants/url-api';
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
      const { id, name, price, colors, imgUrl } = product;

      // Creating the main div element for each product
      const productItemElement = createNewElement({
        tag: 'div',
        className: 'product-item'
      });

      // Creating the figure element for the product image
      const productImageFigureElement = createNewElement({
        tag: 'figure',
        className: 'product-thumbnail'
      });

      const productLinkAttributes = {
        href: `/${PRODUCTS_ENDPOINT}/${id}`
      }
      const linkElement = createNewElement({
        tag: 'a',
        attributes: productLinkAttributes
      });
      const productImageLinkElement = linkElement;
      const productLinkElement = linkElement;

      // Creating the img element for the product image
      const productImageAttributes = {
        src: imgUrl,
        alt: name
      }
      const productImageElement = createNewElement({
        tag: 'img',
        attributes: productImageAttributes
      });

      productImageLinkElement.append(productImageElement);
      productImageFigureElement.append(productImageLinkElement);

      // Creating the div element for the product details
      const productDetailElement = createNewElement({ tag: 'div' });

      // Creating the h2 element for the product name
      const productNameElement = createNewElement({
        tag: 'h2',
        className: 'product-info product-title',
        textContent: name
      });
      productLinkElement.append(productNameElement);

      // Creating the ul element for the product colors
      const productColorsWrapperElement = createNewElement({
        tag: 'ul',
        className: 'product-option-colors'
      });
      const colorOptionList = this.createColorOptionList(colors);
      productColorsWrapperElement.append(...colorOptionList);

      // Creating the p element for the product price
      const productPriceElement = createNewElement({
        tag: 'p',
        className: 'product-info',
        textContent: `$ ${price}`
      });

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
    const productListElement = createNewElement({
      tag: 'ul',
      className: 'main-products-container'
    });
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

    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = `
      <div class="container product-detail-container">
        <figure class="product-preview">
          <img id="product-img" src="" alt="">
        </figure>
        <div class="product-details">
          <h2 id="title" class="product-info"></h2>
          <ul id="product-option-colors" class="product-option-colors">
          </ul>
          <p id="price" class="product-info product-price"></p>
          <dl class="product-data product-info">
            <div class="product-info-row">
              <dt class="product-info-term">Brand</dt>
              <dd id="brand" class="product-info-value"></dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Model Name</dt>
              <dd id="model-name" class="product-info-value"></dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Color</dt>
              <dd id="color" class="product-info-value"></dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Form</dt>
              <dd id="form-factor" class="product-info-value"></dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Connectivity Technology</dt>
              <dd id="connectivity-technology" class="product-info-value"></dd>
            </div>
            <div class="product-info-row">
              <dt class="product-info-term">Amount</dt>
              <dd id="amount" class="product-info-value"></dd>
            </div>
          </dl>
          <button class="btn btn-primary btn-success">Add to Cart</button>
        </div>
      </div>
    `;

    // Wait until the browser has updated the DOM
    // so the code would runs normally
    setTimeout(() => {
      const titleElement = document.getElementById('title');
      const priceElement = document.getElementById('price');
      const productImageElement = document.getElementById('product-img');
      const colorOptionListElement = document.getElementById('product-option-colors');
      const brandDescElement = document.getElementById('brand');
      const modelNameDescElement = document.getElementById('model-name');
      const colorDescElement = document.getElementById('color');
      const formFactorDescElement = document.getElementById('form-factor');
      const connectivityTechnologyDescElement = document.getElementById('connectivity-technology');
      const amountDescElement = document.getElementById('amount');

      productImageElement.src = imgUrl;
      productImageElement.alt = name;
      
      const colorOptionList = this.createColorOptionList(colors);
      colorOptionListElement.append(...colorOptionList);

      titleElement.textContent = name;
      priceElement.textContent = `$ ${price}`;
      brandDescElement.textContent = brand;
      modelNameDescElement.textContent = modelName;
      colorDescElement.textContent = colors[0].name;
      formFactorDescElement.textContent = formFactor;
      connectivityTechnologyDescElement.textContent = connectivityTechnology;
      amountDescElement.textContent = amount;
    }, 0);
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
