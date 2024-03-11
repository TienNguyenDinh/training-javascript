import { REGEX_PATTERNS } from '../constants/regexPatterns';

let formError = {};
const { digitRegex, integerRegex, hexCodeRegex } = REGEX_PATTERNS;

/**
 * Checks if the value is a string
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 */
const validateString = ({ key, value }) =>
  formError[key] = typeof value !== 'string' ? `${key} must be a string.` : '';

/**
 * Checks if the value is a number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 */
const validateInteger = ({ key, value }) =>
  formError[key] = !integerRegex.test(value) ? `${key} must be an integer.` : '';

/**
 * Checks if the value is a number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 */
const validateFloat = ({ key, value }) =>
  formError[key] = !digitRegex.test(value) ? `${key} must be a float.` : '';

/**
 * Checks if the value is a number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 */
const validateEmptiness = ({ key, value }) =>
  formError[key] = value.trim() === '' ? `${key} is required.` : '';

/**
 * Checks if the value is longer than mininum length
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 */
const validateLength = ({ key, value, min = 6 }) =>
  formError[key] = value.trim().length < min ? `${key} must have at least ${min} characters.` : '';

/**
 * Checks if the value is a positive number
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {number} params.value - The value of that field
 */
const validatePositive = ({ key, value }) =>
  formError[key] = parseFloat(value) < 0 ? `${key} needs to be a positive number.` : '';

/**
 * Checks if the value is a hex code
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 */
const validateHexCode = ({ key, value }) =>
  formError[key] = !hexCodeRegex.test(value) ? `${key} needs to be a correct hex code eg: #333.` : '';

/**
 * Checks if the value is a valid url
 * @param {Object} params - An object
 * @param {string} params.key - The field that needs to check
 * @param {string} params.value - The value of that field
 */
function validateUrl({ key, value }) {
  console.log(key, value)
  if (key in formError && formError[key] !== '') {
    return;
  }
  console.log(key, value)
  try {
    new URL(value);

    const fileExtension = value.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
      formError[key] = '';
    } else {
      formError[key] = `${key} must be a valid image URL (jpg, jpeg, or png).`;
    }
  } catch (error) {
    formError[key] = `${key} must be a valid URL.`;
  }
}

/**
 * Validates the form data
 * @param {Object} data - The form data
 * @returns {Object} An object containing validation results
 */
function validateForm(validationSchema) {
  formError = {};

  for (const key in validationSchema) {
    const { field, value, validators } = validationSchema[key];
    validateEmptiness({ key: field, value });
    
    for (const validator of validators) {
      if (formError[field] !== '') {
        break;
      }

      validator({ key: field, value });
    }
  }
  
  return { formError }
}

export {
  validateString,
  validateEmptiness,
  validateFloat,
  validateHexCode,
  validateInteger,
  validateLength,
  validatePositive,
  validateUrl,
  validateForm
}
