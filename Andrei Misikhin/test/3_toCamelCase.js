const expect = require('chai').expect;
const toCamelCase = require('../index').toCamelCase;

let testValues = [
  {
    str: 'the-stealth-warrior',
    expected: 'theStealthWarrior'
  },
  {
    str: 'The_Stealth_Warrior',
    expected: 'TheStealthWarrior'
  },
  {
    str: 'my--Super_pink_pony',
    expected: 'mySuperPinkPony'
  },
  {
    str: '__Best_plAce--in_-_-The-woRld',
    expected: 'BestPlAceInTheWoRld'
  },
  {
    str: '---___---Be--_-theFir__st--ManIn-_spACE',
    expected: 'BeTheFirStManInSpACE'
  },
  {
    str: undefined,
    expected: ''
  },
]

function test(str, expected) {
  describe(`toCamelCase(${str})`, () =>
    it(`should returns ${expected}`, () => {

      expect(toCamelCase(str)).to.be.equal(expected);

    })
  );
}

for ({ str, expected } of testValues) {
  test(str, expected)
}