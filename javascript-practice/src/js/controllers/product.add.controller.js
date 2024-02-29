import showToastify from '../utils/toastify';
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
    addProductBtnElement.addEventListener('click', (event) => {
      event.preventDefault();

      const nameValue = document.getElementById('name').value;
      const priceValue = document.getElementById('price').value;
      const brandValue = document.getElementById('brand').value;
      const modelNameValue = document.getElementById('modelName').value;
      const colorNameValue = document.getElementById('color').value;
      const hexCodeValue = document.getElementById('hexCode').value;
      const formFactorValue = document.getElementById('formFactor').value;
      const connectivityTechnologyValue = document.getElementById('connectivityTechnology').value;
      const amountValue = document.getElementById('amount').value;
      const imageUrlValue = document.getElementById('imageUrl').value;

      const product = {
        name: nameValue,
        price: priceValue,
        brand: brandValue,
        modelName: modelNameValue,
        // colors: [{
        //   name: colorNameValue,
        //   hexCode: hexCodeValue
        // }],
        formFactor: formFactorValue,
        connectivityTechnology: connectivityTechnologyValue,
        amount: amountValue,
        imgUrl: imageUrlValue
      }

      const formError = validateForm(product);

      for(const key in formError) {
        showToastify(formError[key], 'toastify-danger');
      }

      return;

      this.service.addProduct(product);
    });
  }
}
