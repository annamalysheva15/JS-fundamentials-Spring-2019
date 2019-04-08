const expect = require('chai').expect;
const transform = require('../index').transform;

let testValues = [
  {
    numbers: [10, 20, 30, 40, 50],
    funcIndex: 3,
    expected: 40
  },
  {
    numbers: [-5, 55, 1, 00, 20],
    funcIndex: 0,
    expected: -5
  },
  {
    numbers: [10, 20, 30, 40, 50],
    funcIndex: 4,
    expected: 50
  },
  {
    numbers: [655, 0.4543, 98, 12, 531],
    funcIndex: 1,
    expected: 0.4543
  },
  {
    numbers: undefined,
    funcIndex: 1,
    expected: undefined
  },
];

function test(numbers, funcIndex, expected) {
  describe(`transform(${numbers})`, () =>
    it(`should returns ${expected}`, () => {

      let newArray = transform(numbers)
      newArray 
        ? expect(newArray[funcIndex]()).to.be.eql(expected)
        : expect(newArray).to.be.eql(expected);

    })
  );
}

for ({ numbers, funcIndex, expected } of testValues) {
  test(numbers, funcIndex, expected)
}