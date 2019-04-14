const assert = require('chai').assert;
const sum = require('../task-8').default;

// 8. Task 8

describe(`Testing Task-8 ... 'sum()' \n
  Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them.
  `, () => {

  it(`it should return sum of all the arguments`, () => {
    assert.equal(sum(1,3,5,7), 16);
  });

  it(`it should deal correctly with no arguments`, () => {
    assert.equal(sum().toString(), NaN.toString());
  });

  it(`it should deal correctly with one argument`, () => {
    assert.equal(sum(3), 3);
  });

  it(`it should deal correctly with numbers as strings`, () => {
    assert.equal(sum('3', '2'), 5);
  });

  it(`it should deal correctly with none numerical arguments`, () => {
    assert.equal(sum('a').toString(), NaN.toString());
  });
});
