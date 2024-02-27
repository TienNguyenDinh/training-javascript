/**
 * Generates a list of color options for a product
 * @param {Object[]} colors An array of color object.
 * @returns {HTMLElement[]} An array of HTML elements representing color options
 */
export default function getColorOptionList(colors) {
  const colorOptionList = [];

  for(let color of colors) {
    const productColorWrapperElement = document.createElement('li');

    const productColorLabelElement = document.createElement('label');
    productColorLabelElement.className = 'btn btn-option-color';
    productColorLabelElement.setAttribute('data-color', color.name);
    productColorLabelElement.setAttribute('for', `color-${color.name}`);

    const productColorInputElement = document.createElement('input');
    productColorInputElement.hidden = true;
    productColorInputElement.setAttribute('type', 'radio')
    productColorInputElement.setAttribute('id', `color-${color.name}`);
    productColorInputElement.setAttribute(
      'value',
      `{"name": "${color.name}", "hexCode": "${color.hexCode}"}`
    );
    productColorInputElement.setAttribute('name', 'color');

    productColorWrapperElement.append(productColorLabelElement, productColorInputElement);

    colorOptionList.push(productColorWrapperElement);
  }

  return colorOptionList;
}
