let solutions = require('../solutions.js');
let assert = require('assert');

describe('JS Challenge Solutions', function() {
  
  describe('1. splitAndMerge', function() {
    it('transforms ("My name is John"," ") to "M y n a m e i s J o h n"', function() {
      assert.equal('M y n a m e i s J o h n', solutions.splitAndMerge("My name is John"," "));
    });
    it('transforms ("Hello World!",",") to "H,e,l,l,o W,o,r,l,d,!"', function() {
      assert.equal('H,e,l,l,o W,o,r,l,d,!', solutions.splitAndMerge("Hello World!",","));
    }); 
    it('transforms ("Привет мир!",":") to "П:р:и:в:е:т м:и:р:!"', function() {
      assert.equal('П:р:и:в:е:т м:и:р:!', solutions.splitAndMerge("Привет мир!",":"));
    });   
  });
  
   describe('2. convert', function() {
    it("converts {name: 'Jeremy', age: 24, role: 'Software Engineer'} to [['name', 'Jeremy'], ['age', 24], ['role', 'Software Engineer']]", function() {
      assert.deepEqual(([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]), (solutions.convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})));
    });
    it("converts {user: 'Anonym', age: 30, role: 'user', sex: 'male', city: 'St. Petersburg'} to [['user', 'Anonym'], ['age', 30], ['role', 'user'], ['sex', 'male'], ['city', 'St. Petersburg']]", function() {
      assert.deepEqual(([['user', 'Anonym'], ['age', 30], ['role', 'user'], ['sex', 'male'], ['city', 'St. Petersburg']]), (solutions.convert({user: 'Anonym', age: 30, role: 'user', sex: 'male', city: 'St. Petersburg'})));
    });
  });

  describe('3. toCamelCase using string.replace', function() {
     it('transforms ("the-stealth-warrior") to "theStealthWarrior"', function() {
      assert.equal('theStealthWarrior', solutions.toCamelCaseByReplace('the-stealth-warrior'));
    });
    it('transforms ("The_Stealth_Warrior") to "TheStealthWarrior"', function() {
      assert.equal('TheStealthWarrior', solutions.toCamelCaseByReplace('The_Stealth_Warrior'));
    });
  });

  describe('3. toCamelCase using an array and a loop', function() {
    it('transforms ("the-stealth-warrior") to "theStealthWarrior"', function() {
      assert.equal('theStealthWarrior', solutions.toCamelCaseByLoop('the-stealth-warrior'));
    });
    it('transforms ("The_Stealth_Warrior") to "TheStealthWarrior"', function() {
      assert.equal('TheStealthWarrior', solutions.toCamelCaseByLoop('The_Stealth_Warrior'));
    });
  });

  
  describe('4. reverseEachWord', function() {
    it('transforms (" A fun little challenge! ") to " A nuf elttil !egnellahc "', function() {
      assert.equal(' A nuf elttil !egnellahc ', solutions.reverseEachWord(' A fun little challenge! '));
    });
    it('transforms (" Какой-то перевертыш ") to " от-йокаК шытревереп "', function() {
      assert.equal(' от-йокаК шытревереп ', solutions.reverseEachWord(' Какой-то перевертыш '));
    });
  });

  describe('5. stringExpansion', function() {
    it('transforms ("3a4B2d") to "aaaBBBBdd"', function() {
      assert.equal('aaaBBBBdd', solutions.stringExpansion('3a4B2d'));
    });
    it('ignores consecutive numeric characters unless a numeric is followed by a non-numeric ("3d332f2a") > "dddffaa"', function() {
      assert.equal('dddffaa', solutions.stringExpansion('3d332f2a'));
    });
    it('does not do any changes for consecutive alphabetic characters ("abcde") > "abcde"', function() {
      assert.equal('abcde', solutions.stringExpansion('abcde'));
    });
    it('if there are only numerics, returns an empty string ("1234") > ""', function() {
      assert.equal('', solutions.stringExpansion('1234'));
    });
  });
  
  describe('6. largest', function() {
    it('the largest from (2, 0.1, -5, 100, 3) should be 100', function(){
      assert.equal(100, solutions.largest(2, 0.1, -5, 100, 3));
    })
    it("the largest from (-2, -0.1, -5, -100, -3) should be -0.1", function() {
        assert.equal(solutions.largest(-2, -0.1, -5, -100, -3), -0.1);
    });
  });
 
  describe('6. smallest', function() {
    it('the smallest from (2, 0.1, -5, 100, 3) should be -5', function(){
      assert.equal(-5, solutions.smallest(2, 0.1, -5, 100, 3));
    })
    it("the smallest from  (-2, -0.1, -5, -100, -3) should be -100", function() {
        assert.equal(-100, solutions.smallest(-2, -0.1, -5, -100, -3));
    });
  });
 
  describe('7. transform', function() {
    it('for array of numbers = [10, 20, 30, 40, 50] newArray[3] should return 40', function(){
      let newArray = solutions.transform([10, 20, 30, 40, 50])
        assert.equal(newArray[3](), 40);        
    });
    it('for array of numbers = [10, 20, 30, 40, 50] newArray[4] should return 50', function(){
      let newArray = solutions.transform([10, 20, 30, 40, 50])      
        assert.equal(newArray[4](), 50);        
    });
  });

  describe('8. sum', function() {
    it('returns 16 for (1,3,5,7)', function(){
      assert.equal(16, solutions.sum(1,3,5,7));
    })
    it('returns 45 for (1,2,3,4,5,6,7,8,9)', function(){
      assert.equal(45, solutions.sum(1,2,3,4,5,6,7,8,9));
    })
    it('returns -0.5 for (10,5,-8,-7.5)', function(){
      assert.equal(-0.5, solutions.sum(10,5,-8,-7.5));
    })
    it('returns 0 for (0)', function(){
      assert.equal(0, solutions.sum(0));
    }) 
    it('if there is only one argument returns this argument, e.g. 5 for (5)', function(){
      assert.equal(5, solutions.sum(5));
    })    
  });
  

});
