/**
 * Generates HTML for a product info row
 *
 * @param {Object} params - The parameters for the product info
 * @param {string} params.term - The term of the info
 * @param {string} params.value - The value of the info
 * @returns {string} The HTML string for the product info
 */
const productInfoHTML = ({ term, value }) => {
  return `
    <div class="product-info-row">
      <dt class="product-info-term">${term}</dt>
      <dd class="product-info-value">${value}</dd>
    </div>
  `
}

export default productInfoHTML;
