const assert = require('chai').assert;
const stringExpansion = require('../task-5').default;

// 5. Task 5


describe(`Testing Task-5 ... 'stringExpansion()' \n
  Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string:\n
  The numeric values represent the occurance of each letter preceding that numeric value.\n
  There should be no numeric characters in the final string.\n
  Empty strings should return an empty string.
  `, () => {

  it(`it should return "DDDaadddddff" when passing string "3D2a5d2f"`, () => {
    assert.equal(stringExpansion('3D2a5d2f'), 'DDDaadddddff');
  });

  it(`it should return "dddffaa" when passing string "3d332f2a"`, () => {
    assert.equal(stringExpansion('3d332f2a'), 'dddffaa');
  });

  it(`it should return "   " when passing string "   "`, () => {
    assert.equal(stringExpansion('   '), '   ');
  });

  it(`it should return should deal correctly with zeros`, () => {
    assert.equal(stringExpansion('a2b43c0fgg'), 'abbcccgg');
  });
});
