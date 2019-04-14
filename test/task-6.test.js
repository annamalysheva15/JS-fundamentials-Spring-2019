const assert = require('chai').assert;
const {
  theLargest,
  theSmallest
} = require('./../task-6.js');

// 6. Task 6

describe(`Testing Task-6 ... 'theLargest()' \n
  Write largest and smallest functions that returns the largest and smallest number passed like a argument.
  Example: largest(2, 0.1, -5, 100, 3) // 100 smallest(2, 0.1, -5, 100, 3) // -5
  `, () => {

  it(`it should return "100" when passing string "2, 0.1, -5, 100, 3"`, () => {
    assert.equal(theLargest(2, 0.1, -5, 100, 3), 100);
  });

  it(`it should return "-5" when passing string "2, 0.1, -5, 100, 3"`, () => {
    assert.equal(theSmallest(2, 0.1, -5, 100, 3), -5);
  });

  it(`it should return undefined when no arguments`, () => {
    assert.equal(theLargest(), void(0));
  });
});
