import { getElementById, generateErrorMessages } from '../utils/dom';
import validateForm from '../utils/validateForm';
import findRoute from '../utils/findRoute';

export default class ProductFormController {
  constructor(view, service, action) {
    this.view = view;
    this.service = service;
    this.action = action;

    this.displayProductFormPage();

  }

  /**
   * Renders add-product page
   */
  async displayProductFormPage() {
    let data = {};

    if (this.action === 'edit') {
      const { params } = findRoute(window.location.pathname);

      data = await this.service.getById(params.id);
    }

    this.view.renderProductFormPage(data);

    this.bindSubmitProductEvent();
  }

  /**
   * Binds event to handle product addition
   */
  bindSubmitProductEvent() {
    const submitProductBtnElement = getElementById('submit-button');

    submitProductBtnElement.addEventListener('click', async (event) => {
      console.log(1)
      event.preventDefault();

      const form = getElementById('product-form');

      const idValue = form.dataset.productId;
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
      if (Object.keys(formError).length > 0) {
        return;
      }

      if (this.action === 'add') {
        await this.service.addProduct(product);

        form.reset();
      }

      if (this.action === 'edit') {
        await this.service.editProduct(product, idValue);

        this.displayProductFormPage();
      }
    });
  }
}
