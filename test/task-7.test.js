const assert = require('chai').assert;
const transform = require('../task-7').default;


// 7. Task 7

describe(`Testing Task-7 ... 'transform()' \n
  Write function transform that will transform array of numbers to array of functions that will return value from a base array.
  `, () => {

  it(`it should return array of functions, where function under particular index will return value under same undex in original array`, () => {
    assert.equal(transform([10, 20, 30, 40, 50])[3](), 40);
    assert.equal(transform([10, 20, 30, 40, 50])[4](), 50);
  });
});
