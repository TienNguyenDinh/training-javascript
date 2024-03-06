const REGEX_PATTERNS = {
  wordRegexStr: '\\w+',
  integerRegex: /^-?\d+$/,
  digitRegex: /^-?\d*\.?\d+$/,
  hexCodeRegex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/,
  camelCaseRegex: /([a-z])([A-Z])/g,
  firstCharacterRegex: /^./
}

export { REGEX_PATTERNS }
