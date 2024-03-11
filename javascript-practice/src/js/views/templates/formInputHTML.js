/**
 * Generates HTML for a form input
 *
 * @param {Object} params - The parameters for the form input
 * @param {string} params.field - The name of the field
 * @param {string} params.value - The value of the field
 * @param {string} params.id - The id of the field
 * @returns {string} The HTML string for the form input
 */
const formInputHTML = ({ field, value, id }) => {
  return `
    <div class="flex-column">
      <label class="label-primary" for="${id}">${field}</label>
      <input value="${value}" data-field="${field}" id="${id}" type="text" class="form-control input-size-md">
      <p data-field-error="${field}" class="error-message" id="${id}-error"></p>
    </div>
  `
}

export default formInputHTML;
