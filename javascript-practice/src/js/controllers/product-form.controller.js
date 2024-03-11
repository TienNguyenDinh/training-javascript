import {
  getElementById,
  getElementValueById,
  addEventListener,
  generateErrorMessages
} from '../utils/dom';
import validateForm from '../utils/validateForm';
import findRoute from '../utils/findRoute';
import { ACTION } from '../constants/action';
import Toast from '../utils/toastify';
import { handleRoute } from '../routes/router';
import MESSAGES from '../constants/messages';
import {
  validateString,
  validateFloat,
  validateForm,
  validateHexCode,
  validateInteger,
  validateLength,
  validatePositive,
  validateUrl,
  validateForm
} from '../utils/validateForm';

export default class ProductFormController {
  constructor(view, service, action) {
    this.view = view;
    this.service = service;
    this.action = action;
  }

  /**
   * Calls displaying product-form page
   */
  async init() {
    await this.service.getAll();
    await this.displayProductFormPage();
  }

  /**
   * Renders add-product page
   */
  async displayProductFormPage() {
    let data = {};

    if (this.action === ACTION.EDIT) {
      const { params } = findRoute(window.location.pathname);

      data = await this.service.getById(params.id);
    }

    this.view.renderProductFormPage(data);

    this.bindProductFormEvent();
  }

  /**
   * Binds event to handle product addition
   */
  bindProductFormEvent() {
    const {
      ADD_PRODUCT_FAILED_MSG,
      ADD_PRODUCT_SUCCESS_MSG,
      UPDATE_ITEM_FAILED_MSG,
      UPDATE_ITEM_SUCCESS_MSG
    } = MESSAGES
    const submitBtnElement = getElementById('submit-button');

    // Bind the click event to the 'Add Product' button
    addEventListener(submitBtnElement, 'click', async (event) => {
      event.preventDefault();

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

      const validationSchema = {
        name: {
          field: 'Name',
          value: nameValue,
          validators: [validateString, validateLength]
        },
        price: {
          field: 'Price',
          value: priceValue,
          validators: [validateFloat, validatePositive]
        },
        brand: {
          field: 'Brand',
          value: brandValue,
          validators: [validateString]
        },
        modelName: {
          field: 'Model Name',
          value: modelNameValue,
          validators: [validateString]
        },
        color: {
          field: 'Color',
          value: colorNameValue,
          validators: [validateString]
        },
        hexCode: {
          field: 'Hex Code',
          value: hexCodeValue,
          validators: [validateHexCode]
        },
        formFactor: {
          field: 'Form Factor',
          value: formFactorValue,
          validators: [validateString]
        },
        connectivityTechnology: {
          field: 'Connectivity Technology',
          value: connectivityTechnologyValue,
          validators: [validateString]
        },
        amount: {
          field: 'Amount',
          value: amountValue,
          validators: [validateInteger, validatePositive]
        },
        imgUrl: {
          field: 'Image URL',
          value: imageUrlValue,
          validators: [validateUrl]
        }
      }
      const { formError } = validateForm(validationSchema);

      // Generate new error messages based on the validation results
      generateErrorMessages(formError);

      // If there are any validation errors, stop the function
      const isPassed = Object.values(formError).every(value => value === '');
      if (!isPassed) {
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

      switch (this.action) {
        case ACTION.ADD: {
          const { isSuccess } = await this.service.add(product);

          if (!isSuccess) {
            return Toast.error(ADD_PRODUCT_FAILED_MSG);
          }

          Toast.success(ADD_PRODUCT_SUCCESS_MSG);

          return handleRoute({ href: '/' });

          break;
        }
        case ACTION.EDIT: {
          const { params } = findRoute(window.location.pathname);

          const { isSuccess } = await this.service.editById(params.id, product);

          if (!isSuccess) {
            return Toast.error(UPDATE_ITEM_FAILED_MSG);
          }

          Toast.success(UPDATE_ITEM_SUCCESS_MSG);

          break;
        }
      }

      this.displayProductFormPage();
    });
  }
}
