import { getElementById, getElementValueById, generateErrorMessages } from '../utils/dom';
import validateForm from '../utils/validateForm';

export default class ProductFormController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProductFormPage();
    this.bindProductFormEvent();
  }

  /**
   * Renders add-product page
   */
  displayProductFormPage() {
    this.view.renderProductFormPage();
  }

  /**
   * Binds event to handle product addition
   */
  bindProductFormEvent() {
    const submitBtnElement = getElementById('submit-button');

    // Bind the click event to the 'Add Product' button
    submitBtnElement.addEventListener('click', async (event) => {
      event.preventDefault();

      const form = getElementById('product-form');

      // Get the values from the form inputs
      const nameValue = getElementValueById('name');
      const priceValue = getElementValueById('price');
      const brandValue = getElementValueById('brand');
      const modelNameValue = getElementValueById('model-name');
      const colorNameValue = getElementValueById('color');
      const hexCodeValue = getElementValueById('hex-code');
      const formFactorValue = getElementValueById('form-factor');
      const connectivityTechnologyValue = getElementValueById('connectivity-technology');
      const amountValue = getElementValueById('amount');
      const imageUrlValue = getElementValueById('image-url');

      // Create a product object with the form input values
      const productInputs = {
        'Name': nameValue,
        'Price': priceValue,
        'Brand': brandValue,
        'Model Name': modelNameValue,
        'Color': colorNameValue,
        'Hex Code': hexCodeValue,
        'Form Factor': formFactorValue,
        'Connectivity Technology': connectivityTechnologyValue,
        'Amount': amountValue,
        'Image URL': imageUrlValue
      }

      const { formError } = validateForm(productInputs);

      // Generate new error messages based on the validation results
      generateErrorMessages(formError);

      // If there are any validation errors, stop the function
      const isPassed = Object.values(formError).every(value => value === '');
      if(isPassed === false) {
        return;
      }

      const product = {
        name: nameValue,
        price: priceValue,
        brand: brandValue,
        modelName: modelNameValue,
        colors: [{
          name: colorNameValue,
          hexCode: hexCodeValue,
        }],
        formFactor: formFactorValue,
        connectivityTechnology: connectivityTechnologyValue,
        amount: amountValue,
        imgUrl: imageUrlValue
      }

      await this.service.add(product);

      // Reset the form
      form.reset();
    });
  }
}
