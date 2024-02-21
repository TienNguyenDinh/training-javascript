class ProductView {
  displayProducts() {
    const productInfoElement = document.getElementById("product-name");

    productInfoElement.textContent = this.products[0].name;
  }
}
