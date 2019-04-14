const assert = require('chai').assert;
const reverseString = require('../task-4').default;

// 4. Tasks 4

describe(`Testing Task-4 ... 'reverseString()' \n
  Write a function that takes a sentence (string) and reverses each word in the sentence.`, () => {

  it(`" A fun little challenge! " => " A nuf elttil !egnellahc "`, () => {
    assert.equal(reverseString(' A fun little challenge! '), ' A nuf elttil !egnellahc ');
  });

  it(`it should deal correctly with multiple space in between`, () => {
    assert.equal(reverseString('   '), '   ');
  });

  it(`it should deal correctly with multiple spaces`, () => {
    assert.equal(reverseString('  A  fun  little  challenge!  '), '  A  nuf  elttil  !egnellahc  ');
  });
});
