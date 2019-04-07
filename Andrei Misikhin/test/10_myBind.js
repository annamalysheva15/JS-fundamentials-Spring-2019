const expect = require('chai').expect;
const myBind = require('../index').myBind;

let testValues = [
  {
    func: 
      function addPropToNumber(number) {
        return this.prop + number;
      },
    context: { prop: 9 },
    params: 1,
    expected: 10
  },
  {
    func: 
      function subPropFromNumber(number) {
        return this.prop - number;
      },
    context: { prop: 9 },
    params: 1,
    expected: 8
  },
  {
    func: 
      function sumAllArgsAndContext(number, a, b, c) {
        return this.prop + number + a + b + c;
      },
    context: { prop: 9 },
    params: [1, 2, 3, 4],
    expected: 19
  },
  {
    func: 
      function sumAllArgsAndContext(number, a, b, c) {
        return this.prop + this.prop2 + number + a + b + c;
      },
    context: { prop: 9, prop2: -2},
    params: [1, 2, 3, 4],
    expected: 17
  },
  {
    func: 
      function sumAllArgsAndContext(number, a, b, c) {
        return this.prop + this.prop2 + number + a;
      },
    context: { prop: 9, prop2: -2},
    params: [1, 2, 3, 4],
    expected: 10
  }
]

function test(func, context, params, expected) {
  describe(`func(${params}) bound to context`, () =>
    it(`should returns ${expected}`, () => {
      
      const bound = func.myBind(context);
      params && params.length
        ? expect(bound(...params)).to.be.equal(expected)
        : expect(bound(params)).to.be.equal(expected)
    })
  );
}

for ({ func, context, params, expected } of testValues) {
  test(func, context, params, expected)
}