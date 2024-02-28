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

export { createNewElement }
