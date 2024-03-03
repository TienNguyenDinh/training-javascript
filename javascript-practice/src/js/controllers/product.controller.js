export default class ProductController {
  constructor(view, service) {
    this.view = view;
    this.service = service;

    this.displayProducts();
  }

  /**
   * Fetches products from the server and displays them
   */
  async displayProducts() {
    const products = await this.service.getAll();

    this.view.renderProducts(products);

    this.bindDeleteProductEvent();
  }

  /**
   * Displays the Add Product Page
   */
  displayAddProductPage() {
    this.view.renderAddProductPage();
  }

  /**
   * Binds the delete product event to each delete button
   * If the deletion is successful, it re-displays the products
   */
  bindDeleteProductEvent() {
    const btnDeleteElements = document.querySelectorAll('.btn-delete');

    btnDeleteElements.forEach(element => {
      element.addEventListener('click', async (e) => {
        const target = e.target;
        const id = target.dataset.id;

        const data = await this.service.deleteById(id);

        if(data.isSuccess) {
          this.displayProducts();
        }
      });
    });
  }
}
