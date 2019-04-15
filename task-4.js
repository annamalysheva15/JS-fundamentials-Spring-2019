// 4. Tasks 4

const reverseString = (str) => str.split(' ').map((word) => word ? word.split('').reduce((current, next) => next + current) : word).join(' ');
const reverseString2 = (str) => str.split('').reverse().join('');

module.exports = {
  default: reverseString
};
