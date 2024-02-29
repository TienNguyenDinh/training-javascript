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
  const { digit } = REGEX_PATTERNS;

  if (key in formError) {
    return;
  }

  if (digit.test(value)) {
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

  if (typeof value === 'string') {
    return;
  }

  if (value < 0) {
    return formError[key] = `${key} needs to be a positive number.`;
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
  hexCode: [isString],
  formFactor: [isString],
  connectivityTechnology: [isString],
  amount: [isNumber, isPositive],
  imgUrl: [isValidUrl]
};


export default function validateForm(product) {
  formError = {};

  const colors = product.colors[0];
  product.color = colors.color;
  product.hexCode = colors.hexCode;
  delete product.colors;

  for (const key in product) {
    if (validationSchema.hasOwnProperty(key)) {
      const value = product[key];
      const validators = validationSchema[key];

      isNotEmpty({ key, value });

      for (let validator of validators) {
        validator({ key, value });
      }
    }
  }
  console.log(formError)
  return formError;
}
