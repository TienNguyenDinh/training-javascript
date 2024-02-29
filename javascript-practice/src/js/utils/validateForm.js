import { REGEX_PATTERNS } from '../constants/regexPatterns'
;
let formError = {};

/**
 * Checks if the value is a string
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function isString({ key, value }) {
  if (key in formError) {
    return;
  }

  if (typeof value !== 'string') {
    return formError[key] = `${key} must be a string.`;
  }
}

/**
 * Checks if the value is a number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function isNumber({ key, value }) {
  const { digitRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!digitRegex.test(value)) {
    return formError[key] = `${key} must be a number.`;
  }
}

/**
 * Checks if the value is a number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function isNotEmpty({ key, value }) {
  if (key in formError) {
    return;
  }

  if (value.trim() === '') {
    return formError[key] = `${key} is required.`;
  }
}

/**
 * Checks if the value is longer than mininum length
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function isLongerThan({ key, value, min = 6 }) {
  if (key in formError) {
    return;
  }

  if (typeof value === 'number') {
    return;
  }

  if (value.trim() < min) {
    return formError[key] = `${key} must have at least ${min} characters.`;
  }
}

/**
 * Checks if the value is a positive number
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {number} param0.value - The value
 */
function isPositive({ key, value }) {
  if (key in formError) {
    return;
  }

  if (parseInt(value) < 0) {
    return formError[key] = `${key} needs to be a positive number.`;
  }
}

/**
 * Checks if the value is a hex code
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function isHexCode({ key, value }) {
  const { hexCodeRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!hexCodeRegex.test(value)) {
    return formError[key] = `${key} needs to be a correct hex code eg: #333.`;
  }
}

/**
 * Checks if the value is a valid url
 * @param {Object} param0 - An object
 * @param {string} param0.key - The key
 * @param {string} param0.value - The value
 */
function isValidUrl({ key, value }) {
  if (key in formError) {
    return;
  }

  try {
    new URL(value);
  } catch (error) {
    return formError[key] = `${key} must be a valid URL.`;
  }
}

const validationSchema = {
  name: [isString, isLongerThan],
  price: [isNumber, isPositive],
  brand: [isString],
  modelName: [isString],
  color: [isString],
  hexCode: [isHexCode],
  formFactor: [isString],
  connectivityTechnology: [isString],
  amount: [isNumber, isPositive],
  imgUrl: [isValidUrl]
};

function getDataTest(data) {
  const dataTest = JSON.parse(JSON.stringify(data));

  const { name, hexCode } = dataTest.colors[0];
  
  dataTest.color = name;
  dataTest.hexCode = hexCode;

  delete dataTest.colors;

  return dataTest;
}

/**
 * Validates the form data
 * @param {Object} data - The form data
 */
export default function validateForm(data) {
  formError = {};

  const dataTest = getDataTest(JSON.stringify(data));
  
  for (const key in dataTest) {
    // If the key exists in the validationSchema
    if (validationSchema.hasOwnProperty(key)) {
      const value = dataTest[key];

      // Get the array of validator methods associated with the key
      const validators = validationSchema[key];

      isNotEmpty({ key, value });

      for (let validator of validators) {
        validator({ key, value });
      }
    }
  }

  return { formError, dataTest };
}
