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

  renderAddProductPage() {
    const pageContainerElement = createNewElement('div',
      'container add-product-container');

    const pageHeadingElement = createNewElement('h2',
      'main-heading', 'Add Product Page');

    const formAttributes = {
      action: 'javascript:void(0)'
    }
    const formElement = createNewElement('form',
      'form-default add-form', '', formAttributes);

    const formFields = {
      'Name': '',
      'Price': 0,
      'Brand': '',
      'Model Name': '',
      'Color': '',
      'Hex Code': '',
      'Form Factor': '',
      'Connectivity Technology': '',
      'Amount': 0,
      'Image Url': ''
    }
    for (const field in formFields) {
      const columnDivElement = createNewElement('div', 'flex-column');

      const inputAttributes = {
        id: field
      }
      const inputElement = createNewElement('input',
        'form-control input-size-md', '', inputAttributes);
      const labelElement = createNewElement('label',
        'label-primary', field);

      columnDivElement.append(labelElement, inputElement);

      formElement.append(columnDivElement);
    }

    const rowDivElement = createNewElement('div', 'flex-row');

    const submitBtnAttributes = {
      id: 'add-product',
      type: 'submit'
    }
    const submitBtnElement = createNewElement('button',
      'btn btn-primary btn-submit',
      'Submit',
      submitBtnAttributes
    );

    const cancelBtnAttributes = {
      href: '/'
    }
    const cancelBtnElement = createNewElement(
      'a',
      'btn btn-primary btn-danger',
      'Cancel',
      cancelBtnAttributes
    )

    rowDivElement.append(submitBtnElement, cancelBtnElement);

    formElement.append(rowDivElement);

    pageContainerElement.append(pageHeadingElement, formElement)

    const mainContent = document.getElementById('main-content');

    mainContent.append(pageContainerElement);

    return;

    mainContent.innerHTML = `
      <div class="container add-product-container">
        <h1 class="main-heading">Add New Product</h1>
        <form action="javascript:void(0)" class="form-default add-form">
          <div class="flex-column">
            <label class="label-primary" for="name">Name</label>
            <input id="name" type="text" class="form-control input-size-md">
          </div>
          <div class="flex-column">
            <label class="label-primary" for="price">Price</label>
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
            <button type="button" class="btn btn-primary btn-danger">Cancel</button>
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
