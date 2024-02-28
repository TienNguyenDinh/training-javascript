import { API_ROUTES } from '../constants/url-api';
import { createNewElement } from '../utils/dom';

export default class ProductView {
  // Clean the view to make sure nothing is there
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
    this.cleanView();

    const pageContainerElement = createNewElement({
      tag: 'div',
      className: 'container add-product-container'
    });

    const pageHeadingElement = createNewElement({
      tag: 'h2',
      className: 'main-heading',
      textContent: 'Add Product Page'
    });

    const formAttributes = {
      action: 'javascript:void(0)'
    }
    const formElement = createNewElement({
      tag: 'form',
      className: 'form-default add-form',
      attributes: formAttributes
    });

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
      const columnDivElement = createNewElement({
        tag: 'div',
        className: 'flex-column'
      });

      const inputAttributes = {
        id: field
      }
      const inputElement = createNewElement({
        tag: 'input',
        className: 'form-control input-size-md',
        attributes: inputAttributes
      });
      const labelElement = createNewElement({
        tag: 'label',
        className: 'label-primary',
        textContent: field
      });

      columnDivElement.append(labelElement, inputElement);

      formElement.append(columnDivElement);
    }

    const rowDivElement = createNewElement({
      tag: 'div',
      className: 'flex-row'
    });

    const submitBtnAttributes = {
      id: 'add-product',
      type: 'submit'
    }
    const submitBtnElement = createNewElement({
      tag: 'button',
      className: 'btn btn-primary btn-submit',
      textContent: 'Submit',
      attributes: submitBtnAttributes
    });

    const cancelBtnAttributes = {
      href: '/'
    }
    const cancelBtnElement = createNewElement({
      tag: 'a',
      className: 'btn btn-primary btn-danger',
      textContent: 'Cancel',
      attributes: cancelBtnAttributes
    })

    rowDivElement.append(submitBtnElement, cancelBtnElement);

    formElement.append(rowDivElement);

    pageContainerElement.append(pageHeadingElement, formElement)

    const mainContent = document.getElementById('main-content');

    mainContent.append(pageContainerElement);
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
