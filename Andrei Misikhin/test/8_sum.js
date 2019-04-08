const expect = require('chai').expect;
const sum = require('../index').sum;

let testValues = [
  {
    numbers: [1, 3, 5, 7],
    expected: 16
  },
  {
    numbers: [3, 1, 0, 2, 7, 1],
    expected: 14
  },
  {
    numbers: [8, 1, 2, 4],
    expected: 15
  },
  {
    numbers: [9, 6, 7, 0, 0, 0],
    expected: 22
  },
  {
    numbers: [9, 6, 7, 0, 0, 0],
    expected: 22
  },
  {
    numbers: undefined,
    expected: undefined
  },
]

function test(numbers, expected) {
  describe(`sum(${numbers})`, () =>
    it(`should returns ${expected}`, () => {
      
      numbers
        ? expect(sum(...numbers)).to.be.equal(expected)
        : expect(sum(numbers)).to.be.equal(expected)
    })
  );
}

for ({ numbers, expected } of testValues) {
  test(numbers, expected)
}