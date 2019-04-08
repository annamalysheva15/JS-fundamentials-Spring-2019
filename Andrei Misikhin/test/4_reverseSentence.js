const expect = require('chai').expect;
const reverseSentence = require('../index').reverseSentence;

let testValues = [
  {
    sentence: ' A fun little challenge! ',
    expected: ' A nuf elttil !egnellahc '
  },
  {
    sentence: 'The plane - is cuRRently  grounded as ',
    expected: 'ehT enalp - si yltneRRuc  dednuorg sa '
  },
  {
    sentence: ' Paz Errázuriz: The woman who defied',
    expected: ' zaP :ziruzárrE ehT namow ohw deifed'
  },
  {
    sentence: 'Google Could Learn a Lot About You ',
    expected: 'elgooG dluoC nraeL a toL tuobA uoY '
  },
  {
    sentence: '    But  even  without publisher   involvement    ',
    expected: '    tuB  neve  tuohtiw rehsilbup   tnemevlovni    '
  },
  {
    sentence: undefined,
    expected: ''
  },
]

function test(sentence, expected) {
  describe(`reverseSentence(${sentence})`, () =>
    it(`should returns ${expected}`, () => {
      
      expect(reverseSentence(sentence)).to.be.equal(expected);

    })
  );
}

for ({ sentence, expected } of testValues) {
  test(sentence, expected)
}