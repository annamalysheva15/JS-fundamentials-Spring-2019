const expect = require('chai').expect;
const splitAndMerge = require('../index').splitAndMerge;

let testValues = [
  {
    str: 'My name is John',
    sp : ' ',
    expected: 'M y n a m e i s J o h n'
  },
  {
    str: 'Hello World!',
    sp : ',',
    expected: 'H,e,l,l,o W,o,r,l,d,!'
  },
  {
    str: 'Hello World!',
    sp : '!',
    expected: 'H!e!l!l!o W!o!r!l!d!!'
  },
  {
    str: 'Hello     World!',
    sp : '1',
    expected: 'H1e1l1l1o     W1o1r1l1d1!'
  },
  {
    str: 'Hello  Beu tiful  World!',
    sp : '#',
    expected: 'H#e#l#l#o  B#e#u t#i#f#u#l  W#o#r#l#d#!'
  },
  {
    str: undefined,
    sp : undefined,
    expected: ''
  },
]

function test(str, sp, expected) {
  describe(`splitAndMerge(${str}, ${sp})`, () =>
    it(`should returns ${expected}`, () => {

      expect(splitAndMerge(str, sp)).to.be.equal(expected);

    })
  );
}

for ({ str, sp, expected } of testValues) {
  test(str, sp, expected)
}