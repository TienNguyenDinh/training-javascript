import { convertCamelCaseToSpaces } from './convertString';

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
 * This function generates error messages for a given product and key
 * @param {Object} data - The data in object
 * @param {string} clear - A flag indicating whether to clear the error messages
 */
function generateErrorMessages(data, clear=false) {
  for (const key in data) {
    let errorMsgElement;

    errorMsgElement = getElementById(`${key}-error`);

    if (typeof key === 'object') {
      for (const key in product[key]) {
        errorMsgElement = getElementById(`${key}-error`);
      }
    }

    errorMsgElement.textContent = clear ? '' : convertCamelCaseToSpaces(data[key]);
  }
}

export { createNewElement, getElementById, generateErrorMessages }
