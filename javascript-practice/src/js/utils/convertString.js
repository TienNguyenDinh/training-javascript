import { REGEX_PATTERNS } from '../constants/regexPatterns'

/**
 * Converts a camelCase string to a space-separated string with the first letter capitalized
 * @param {string} str - The camelCase string to convert
 * @returns {string} The converted string
 */
function convertCamelCaseToSpaces(str) {
  const { camelCaseRegex, firstCharacterRegex } = REGEX_PATTERNS;

  if (typeof str === 'number') {
    return str;
  }

  return str
    // Insert a space before all found uppercase letters that are both preceded and followed by lowercase letters
    .replace(camelCaseRegex, '$1 $2')
    // Uppercase the first character
    .replace(firstCharacterRegex, str => str.toUpperCase());
}

export { convertCamelCaseToSpaces }
