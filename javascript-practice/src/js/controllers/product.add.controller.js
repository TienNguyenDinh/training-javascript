export default class ProductAddController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayAddProductPage();
  }

  /**
   * Renders add-product page
   */
  displayAddProductPage() {
    this.view.renderAddProductPage();
  }
}
