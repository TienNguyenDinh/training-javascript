export default class ProductView {
  displayProducts(products) {

    const productInfoElement = document.getElementById("product-name");

    productInfoElement.textContent = products[0].name;
  }
}
