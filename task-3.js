// 3. Task 3

const toCamelCase = (name) => name.split(/\-|_/).map((substr, i) => i ? substr.charAt(0).toUpperCase() + substr.slice(1) : substr).join('');

module.exports = {
  default: toCamelCase
};
