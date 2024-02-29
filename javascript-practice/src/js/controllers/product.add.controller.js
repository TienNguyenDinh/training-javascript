import { getElementById, generateErrorMessages } from '../utils/dom';
import validateForm from '../utils/validateForm';

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
    addProductBtnElement.addEventListener('click', async (event) => {
      event.preventDefault();

      const form = getElementById('product-form');

      const nameValue = getElementById('name').value;
      const priceValue = getElementById('price').value;
      const brandValue = getElementById('brand').value;
      const modelNameValue = getElementById('model-name').value;
      const colorNameValue = getElementById('color').value;
      const hexCodeValue = getElementById('hex-code').value;
      const formFactorValue = getElementById('form-factor').value;
      const connectivityTechnologyValue = getElementById('connectivity-technology').value;
      const amountValue = getElementById('amount').value;
      const imageUrlValue = getElementById('image-url').value;

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

      const { formError, dataTest } = validateForm(product);

      // Clear any previous error messages
      generateErrorMessages(dataTest, true);

      // Generate new error messages based on the validation results
      generateErrorMessages(formError);

      // If there are any validation errors, stop the function
      if(Object.keys(formError).length > 0) {
        return;
      }

      await this.service.addProduct(product);

      // Reset the form
      form.reset();
    });
  }
}
