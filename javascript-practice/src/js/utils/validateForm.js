let formError = {};

function isString({ key, value }) {
  if(key in formError) {
    return;
  }

  if (typeof value === 'string') {
    formError[key] = `${key} must be a string.`;
  }
}

function isNumber({ key, value }) {
  if(key in formError) {
    return;
  }

  if (typeof value === 'number') {
    formError[key] = `${key} must be a number.`;
  }
}

function isNotEmpty({ key, value }) {
  if(key in formError) {
    return;
  }

  if (value.trim() === '') {
    formError[key] = `${key} is required.`;
  }
}

function isLongerThan({ key, value, min = 6 }) {
  if(key in formError) {
    return;
  }

  if (typeof value === 'number') {
    return;
  }

  if (value.trim() < min) {
    formError[key] = `${key} must have at least ${min} characters.`;
  }
}

function isPositive({ key, value }) {
  if(key in formError) {
    return;
  }

  if (typeof value === 'string') {
    return;
  }

  if (value < 0) {
    formError[key] = `${key} needs to be a positive number.`;
  }
}

function isValidUrl({ key, value }) {
  if(key in formError) {
    return;
  }

  try {
    new URL(value);
  } catch (error) {
    formError[key] = `${key} must be a valid URL.`;
  }
}



export default function validateForm(product) {
  formError = {};

  for (const key in product) {
    const value = product[key];

    const prop = { key, value };

    isNotEmpty(prop);
    isString(prop);
    isNumber(prop);
    isLongerThan(prop);
    isPositive(prop);
    isValidUrl(prop);
  }

  return formError;
}
