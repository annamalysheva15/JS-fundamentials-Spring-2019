const expect = require('chai').expect;
const stringExpansion = require('../index').stringExpansion;

let testValues = [
  {
    str: '3D2a5d2f',
    expected: 'DDDaadddddff'
  },
  {
    str: '3d332f2a',
    expected: 'dddffaa'
  },
  {
    str: 'abcde',
    expected: 'abcde'
  },
  {
    str: '-235.?43tTA336E030AB;',
    expected: 'tttTAEEEEEEB'
  },
  {
    str: '0Ff2A-2b0.3S 4p',
    expected: 'fAAbbSSSpppp'
  },
  {
    str: undefined,
    expected: ''
  },
]

function test(str, expected) {
  describe(`stringExpansion(${str})`, () =>
    it(`should returns ${expected}`, () => {
      
      expect(stringExpansion(str)).to.be.equal(expected);

    })
  );
}

for ({ str, expected } of testValues) {
  test(str, expected)
}