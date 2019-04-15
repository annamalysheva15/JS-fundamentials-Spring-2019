// 8. Task 8

const sum = (...args) => args.length > 1 ? +args.shift() + sum(...args) : +args[0];

module.exports = {
  default: sum
};
