/**
 * Generates HTML for product info row
 * @param {Array} productInfos - An array of objects, each representing a product info
 * @param {string} productInfos[].term - The term of the product info
 * @param {string} productInfos[].value - The value of the product info
 * @returns {string} The generated HTML string
*/
const renderProductInfoHTML = (productInfos) => {
  let productInfosHTML = ``;

  for (const item of productInfos) {
    const { term, value } = item;

    productInfosHTML += `
      <div class="product-info-row">
        <dt class="product-info-term">${term}</dt>
        <dd class="product-info-value">${value}</dd>
      </div>
    `
  }

  return productInfosHTML;
}

export default renderProductInfoHTML;
