const expect = require('chai').expect;
const largest = require('../index').largest;
const smallest = require('../index').smallest;

let testValues = [
  {
    numbers: [2, 0.1, -5, 100, 3],
    expectedLargest: 100,
    expectedSmallest: -5
  },
  {
    numbers: [15, 19.1, 0, 11, 3],
    expectedLargest: 19.1,
    expectedSmallest: 0
  },
  {
    numbers: [0.001, 0.00001, -0.1, 0.001, 0.002],
    expectedLargest: 0.002,
    expectedSmallest: -0.1
  },
  {
    numbers: [547376537, 32456457, -4, -435, 34],
    expectedLargest: 547376537,
    expectedSmallest: -435
  },
  {
    numbers: undefined,
    expectedLargest: undefined,
    expectedSmallest: undefined
  },
]

function test(numbers, expectedLargest, expectedSmallest) {
  describe(`largest(${numbers})`, () =>
    it(`should returns ${expectedLargest} and ${expectedSmallest}`, () => {

      numbers 
        ? expect(largest(...numbers)).to.be.equal(expectedLargest)
        : expect(largest(numbers)).to.be.equal(expectedLargest)

      numbers 
        ? expect(smallest(...numbers)).to.be.equal(expectedSmallest)
        : expect(smallest(numbers)).to.be.equal(expectedSmallest)
    })
  );
}

for ({ numbers, expectedLargest, expectedSmallest} of testValues) {
  test(numbers, expectedLargest, expectedSmallest)
}