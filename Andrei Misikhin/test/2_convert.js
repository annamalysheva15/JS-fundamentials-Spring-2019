const expect = require('chai').expect;
const convert = require('../index').convert;

let testValues = [
  {
    obj:
      {
        name: 'Jeremy', 
        age: 24,
        role: 'Software Engineer'
      },

    expected: 
      [
        ["name", "Jeremy"],
        ["age", 24],
        ["role", "Software Engineer"]
      ]
  },
  {
    obj:
      {
        'model': 'T-800', 
        eyes: {
          amount: 2,
          params: 
            {
              size: 3,
              color: 'red',
            }
        }, 
        legs: 2
      },

    expected: 
      [
        ["model", "T-800"],
        ["eyes", 
          [
            ["amount", 2],
            ["params",
              [
                ["size", 3],
                ["color", "red"]
              ]
            ]
          ]
        ],
        ["legs", 2]
      ]
  },
  {
    obj: undefined,
    expected: []
  },
];


function test(obj, expected) {
  describe(`convert(${obj})`, () =>
    it(`should returns ${expected}`, () => {

      expect(convert(obj)).to.be.eql(expected);

    })
  );
}

for ({ obj, expected } of testValues) {
  test(obj, expected)
}