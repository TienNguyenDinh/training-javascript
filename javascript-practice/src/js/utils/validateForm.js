import { REGEX_PATTERNS } from '../constants/regexPatterns'
;
let formError = {};

function isString({ key, value }) {
  if (key in formError) {
    return;
  }

  if (typeof value !== 'string') {
    return formError[key] = `${key} must be a string.`;
  }
}

function isNumber({ key, value }) {
  const { digitRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!digitRegex.test(value)) {
    return formError[key] = `${key} must be a number.`;
  }
}

function isNotEmpty({ key, value }) {
  if (key in formError) {
    return;
  }

  if (value.trim() === '') {
    return formError[key] = `${key} is required.`;
  }
}

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

function isPositive({ key, value }) {
  if (key in formError) {
    return;
  }

  if (parseInt(value) < 0) {
    return formError[key] = `${key} needs to be a positive number.`;
  }
}

function isHexCode({ key, value }) {
  const { hexCodeRegex } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (!hexCodeRegex.test(value)) {
    return formError[key] = `${key} needs to be a correct hex code eg: #333.`;
  }
}

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


export default function validateForm(data) {
  formError = {};

  const dataTest = JSON.parse(JSON.stringify(data));

  const { name, hexCode } = dataTest.colors[0];
  dataTest.color = name;
  dataTest.hexCode = hexCode;
  delete dataTest.colors;

  for (const key in dataTest) {
    if (validationSchema.hasOwnProperty(key)) {
      const value = dataTest[key];
      const validators = validationSchema[key];

      isNotEmpty({ key, value });

      for (let validator of validators) {
        validator({ key, value });
      }
    }
  }

  return { formError, dataTest };
}
