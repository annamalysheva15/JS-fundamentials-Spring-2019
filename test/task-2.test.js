const assert = require('chai').assert;
const convert = require('../task-2').default;

// 2. Task 2

describe(`Testing Task-2 ... 'convert()' \n
  Write a function convert Convert a hash into an array. Nothing more, Nothing less.`, () => {

  it(`{name: 'Jeremy', age: 24, role: 'Software Engineer'} should be converted into [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]`, () => {
    assert.deepEqual(convert({
      name: 'Jeremy',
      age: 24,
      role: 'Software Engineer'
    }), [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]);
  });
});
