/**
 * Converts a camelCase string to a space-separated string with the first letter capitalized
 * @param {string} str - The camelCase string to convert
 * @returns {string} The converted string
 */
function convertCamelCaseToSpaces(str) {
  if (typeof str === 'number') return str;

  return str
    // Insert a space before all found uppercase letters that are both preceded and followed by lowercase letters
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Uppercase the first character
    .replace(/^./, str => str.toUpperCase());
}

export { convertCamelCaseToSpaces }