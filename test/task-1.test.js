const assert = require('chai').assert;
const splitAndMerge = require('../task-1').default;

// 1. Task 1

describe(`Testing Task-1 ... 'splitAndMerge()' \n
  It should accept 2 parameters: (str) and (sp). (str) is a sentence. (sp) is a char as separator. \n
  First we need to divide the sentence into words(Use separator space)\n
  Then divide each word into characters(Use separator empty string)\n
  Then merge each characters with the specified sp\n
  At last merge all the words(Use separator space) and return it.`, () => {

  it(`it should return "M y n a m e i s J o h n" when passing string "My name is John"`, () => {
    assert.equal(splitAndMerge('My name is John', ' '), 'M y n a m e i s J o h n');
  });

  it(`it should return "H,e,l,l,o W,o,r,l,d,!" when passing string "Hello World!"`, () => {
    assert.equal(splitAndMerge('Hello World!', ','), 'H,e,l,l,o W,o,r,l,d,!');
  });
});
