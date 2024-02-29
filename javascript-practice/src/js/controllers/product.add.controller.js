import { getElementById } from '../utils/dom';
import showToastify from '../utils/toastify';
import validateForm from '../utils/validateForm';
import { convertCamelCaseToSpaces } from '../utils/convertString';

export default class ProductAddController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayAddProductPage();
    this.bindAddProductEvent();
  }

  /**
   * Renders add-product page
   */
  displayAddProductPage() {
    this.view.renderAddProductPage();
  }

  /**
   * Binds event to handle product addition
   */
  bindAddProductEvent() {
    const addProductBtnElement = document.getElementById('add-product');
    addProductBtnElement.addEventListener('click', (event) => {
      event.preventDefault();

      const nameValue = document.getElementById('name').value;
      const priceValue = document.getElementById('price').value;
      const brandValue = document.getElementById('brand').value;
      const modelNameValue = document.getElementById('model-name').value;
      const colorNameValue = document.getElementById('color').value;
      const hexCodeValue = document.getElementById('hex-code').value;
      const formFactorValue = document.getElementById('form-factor').value;
      const connectivityTechnologyValue = document.getElementById('connectivity-technology').value;
      const amountValue = document.getElementById('amount').value;
      const imageUrlValue = document.getElementById('image-url').value;

      const product = {
        name: nameValue,
        price: priceValue,
        brand: brandValue,
        modelName: modelNameValue,
        colors: [{
          color: colorNameValue,
          hexCode: hexCodeValue,
        }],
        formFactor: formFactorValue,
        connectivityTechnology: connectivityTechnologyValue,
        amount: amountValue,
        imgUrl: imageUrlValue
      }

      const formError = validateForm(product);

      for (const key in product) {
        const errorMsgElement = getElementById(`${key}-error`);

        errorMsgElement.textContent = '';
      }

      for (const key in formError) {
        const errorMsgElement = getElementById(`${key}-error`);

        errorMsgElement.textContent = convertCamelCaseToSpaces(formError[key]);

        return;
      }

      this.service.addProduct(product);
    });
  }
}
