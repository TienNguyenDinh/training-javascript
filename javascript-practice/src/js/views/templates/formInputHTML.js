/**
 * Generates HTML for form inputs
 * @param {Array} props - An array of objects, each representing a form input
 * @param {string} props[].field - The name of the form field
 * @param {string} props[].value - The value of the form field
 * @param {string} props[].id - The id of the form field
 * @returns {string} The generated HTML string
 */
const renderFormInputsHTML = (formInputs) => {
  let formInputsHTML = ``;

  for (const item of formInputs) {
    const { field, value, id } = item;

    formInputsHTML += `
      <div class="flex-column">
        <label class="label-primary" for="${id}">${field}</label>
        <input value="${value}" data-field="${field}" id="${id}" type="text" class="form-control input-size-md">
        <p data-field-error="${field}" class="error-message" id="${id}-error"></p>
      </div>
    `
  }

  return formInputsHTML;
}

export default renderFormInputsHTML;
