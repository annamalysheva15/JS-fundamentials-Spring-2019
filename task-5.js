// 5. Task 5

const stringExpansion = (str) => str.split('').reduce((subresult, next) => /[0-9]/.test(next) ? {
    ...subresult, expander: next
  } : {
    result: subresult.result + next.repeat(subresult.expander),
    expander: 1
  }, {
    result: '',
    expander: 1
  }).result;

  module.exports = {
    default: stringExpansion
  };
