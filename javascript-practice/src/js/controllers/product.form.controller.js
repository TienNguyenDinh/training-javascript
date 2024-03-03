// TODO: Implement the bindSubmitProductEvent method to handle product addition event

export default class ProductFormController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProductFormPage();
  }

  /**
   * Renders product-form page
   */
  displayProductFormPage() {
    this.view.renderAddProductPage();
  }

  /**
   * Binds event to handle product addition
   */
  bindSubmitProductEvent() {

  }
}
