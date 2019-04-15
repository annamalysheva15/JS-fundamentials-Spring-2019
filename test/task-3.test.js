const assert = require('chai').assert;
const toCamelCase = require('../task-3').default;

// 3. Task 3

describe(`Testing Task-3 ... 'toCamelCase()' \n
  Complete the method/function so that it converts dash/underscore delimited words into camel casing. \n
  The first word within the output should be capitalized only if the original word was capitalized. \n
  Example: toCamelCase("the-stealth-warrior")
  At last merge all the words(Use separator space) and return it.`, () => {

  it(`toCamelCase('the-stealth-warrior') should return "theStealthWarrior"`, () => {
    assert.equal(toCamelCase("the-stealth-warrior"), 'theStealthWarrior');
  });

  it(`toCamelCase("The_Stealth_Warrior") should return "TheStealthWarrior"`, () => {
    assert.equal(toCamelCase('The_Stealth_Warrior'), 'TheStealthWarrior');
  });
});
