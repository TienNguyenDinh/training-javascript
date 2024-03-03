import { REGEX_PATTERNS } from '../constants/regexPatterns'
;
let formError = {};

/**
 * Checks if the value is a string
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function validateString({ key, value }) {
  if (key in formError) {
    return;
  }

  if (typeof value !== 'string') {
    formError[key] = `${key} must be a string.`;
  }
}

/**
 * Checks if the value is a number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function validateNumber({ key, value }) {
  const { digitRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!digitRegex.test(value)) {
    formError[key] = `${key} must be a number.`;
  }
}

/**
 * Checks if the value is a number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function validateEmptiness({ key, value }) {
  if (key in formError) {
    return;
  }

  if (value.trim() === '') {
    formError[key] = `${key} is required.`;
  }
}

/**
 * Checks if the value is longer than mininum length
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function validateLength({ key, value, min = 6 }) {
  if (key in formError) {
    return;
  }

  if (typeof value === 'number') {
    return;
  }

  if (value.trim() < min) {
    formError[key] = `${key} must have at least ${min} characters.`;
  }
}

/**
 * Checks if the value is a positive number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function validatePositive({ key, value }) {
  if (key in formError) {
    return;
  }

  if (parseInt(value) < 0) {
    formError[key] = `${key} needs to be a positive number.`;
  }
}

/**
 * Checks if the value is a hex code
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function validateHexCode({ key, value }) {
  const { hexCodeRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!hexCodeRegex.test(value)) {
    formError[key] = `${key} needs to be a correct hex code eg: #333.`;
  }
}

/**
 * Checks if the value is a valid url
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function validateUrl({ key, value }) {
  if (key in formError) {
    return;
  }

  try {
    new URL(value);
  } catch (error) {
    formError[key] = `${key} must be a valid URL.`;
  }
}

const validationSchema = {
  'Name': [validateString, validateLength],
  'Price': [validateNumber, validatePositive],
  'Brand': [validateString],
  'Model Name': [validateString],
  'Color': [validateString],
  'Hex Code': [validateHexCode],
  'Form Factor': [validateString],
  'Connectivity Technology': [validateString],
  'Amount': [validateNumber, validatePositive],
  'Image URL': [validateUrl]
};

/**
 * Validates the form data
 * @param {Object} data - The form data
 */
export default function validateForm(data) {
  formError = {};
  
  for (const key in data) {
    // If the key exists in the validationSchema
    if (validationSchema.hasOwnProperty(key)) {
      const value = data[key];

      // Get the array of validator methods associated with the key
      const validators = validationSchema[key];

      validateEmptiness({ key, value });

      for (let validator of validators) {
        validator({ key, value });
      }
    }
  }

  return { formError };
}
