const assert = require('chai').assert;
require('../task-10');


// 10. Task 10

describe(`Testing Task-10 ... 'Function.prototype.myBind' \n
  Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). \n
  myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma. \n
  Hint: play with the function in Function.prototype and see what this points to inside it. \n
  Your code should look like: Function.prototype.myBind = function () { // your code here } \n
  `, () => {

    function addPropToNumber(number) {
      return this.prop + number;
    }
    var bound = addPropToNumber.myBind({ prop: 9 });

  it(`Async, untestable`, () => {
    assert.equal(bound(1), 10);
  });
});
