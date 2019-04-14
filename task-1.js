// 1. Task 1

const splitAndMerge = (str, sp) => str.split(' ').map((word) => word.split('').join(sp)).join(' ');

module.exports = {
  default: splitAndMerge
};
