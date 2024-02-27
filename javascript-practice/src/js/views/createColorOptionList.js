import { createNewElement } from './dom';

/**
 * Generates a list of color options for a product
 * @param {Object[]} colors An array of color object.
 * @returns {HTMLElement[]} An array of HTML elements representing color options
 */
export default function createColorOptionList(colors) {
  const colorOptionList = [];

  for (let color of colors) {
    const productColorWrapperElement = createNewElement('li');

    // Creating the label element for each color
    const productColorLabelAttributes = {
      'data-color': color.name,
      for: color.name
    }
    const productColorLabelElement = createNewElement('label', 'btn btn-option-color', '', productColorLabelAttributes);

    // Creating the radio button element for each color
    productColorInputAttributes = {
      hidden: true,
      type: 'radio',
      id: `color-${color.name}`
    }
    const productColorInputElement = createNewElement('input', '', '', productColorInputAttributes);

    // Creating the object colorValue for product color input
    let colorValue = JSON.stringify({
      name: color.name,
      hexCode: color.hexCode
    });
    productColorInputElement.setAttribute('value', colorValue);
    productColorInputElement.setAttribute('name', 'color');

    productColorWrapperElement.append(productColorLabelElement, productColorInputElement);

    colorOptionList.push(productColorWrapperElement);
  }

  return colorOptionList;
}
