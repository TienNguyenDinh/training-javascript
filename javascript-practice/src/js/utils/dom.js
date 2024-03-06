/**
 * Creates an HTML element with the specified tag, class name, text content, and attributes.
 * @param {string} tag - The tag name for the element
 * @param {string} [className=''] - The class name for the element
 * @param {string} [textContent=''] - The text content for the element
 * @param {Object} [attributes={}] - An object containing any additional attributes for the element
 * @returns {HTMLElement} The created HTML element
 */
function createNewElement({
  tag,
  className = '',
  textContent = '',
  attributes = {}
}) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  for (let attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }

  return element;
}

/**
 * Gets an HTML element by its ID
 * @param {string} id - The ID of the HTML element
 * @returns {Element} The HTML element with the specified ID
 */
function getElementById(id) {
  return document.getElementById(id);
}

/**
 * Gets a value of an element by its ID
 * @param {string} id - The ID of the HTML element
 * @returns {string} The value of the element
 */
function getElementValueById(id) {
  return document.getElementById(id).value;
}

/**
 * This function generates error messages for a given product and key
 * @param {Object} data - The data in object
 * @param {string} clear - A flag indicating whether to clear the error messages
 */
function generateErrorMessages(formError) {
  // Clear all the error messages first
  const errorMsgElements = document.querySelectorAll(`[data-field-error]`);
  errorMsgElements.forEach(element => element.textContent = '');

  // Render all the error messages that in form error
  for (const key in formError) {
    const value = formError[key];

    const errorMsgElement = document.querySelector(`[data-field-error="${key}"]`);
    errorMsgElement.textContent = value;
  }
}

export {
  createNewElement,
  getElementById,
  getElementValueById,
  generateErrorMessages }
