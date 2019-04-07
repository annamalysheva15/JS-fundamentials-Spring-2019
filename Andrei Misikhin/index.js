module.exports = {

// -------------------1-------------------

/** Returns a string divided by empty string and 
 * merged by given separator. 
 * @example
 * splitAndMerge("My name is John"," ")
 * //returns "M y n a m e i s J o h n"
 * @example
 * splitAndMerge("Hello World!",",")
 * //returns "H,e,l,l,o W,o,r,l,d,!"
 * @function
 * @name splitAndMerge
 * @param {String} str The sentence to divide.
 * @param {String} sp The divide character.
 * @returns {String} The result string.
 */

  splitAndMerge:

    function splitAndMerge(str = '', sp = '') {
      return str.split(' ')
        .map(
          word => 
            word.split('')
            .join(sp)
        )
        .join(' ');
    },


// ---------------------------------------------------------------------------


// -------------------2-------------------

/** Convert an object into an array.
 * @example
 * convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})
 * //returns [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
 * @function
 * @name convert
 * @param {Object} obj The object to convert.
 * @returns {Object} The resulted array.
 */

  convert:

    function transform(obj) {
      let arr = []
      for (let prop in obj) {
        if (obj[prop] === Object(obj[prop])) {
          arr.push([prop, transform(obj[prop])])
        } else {
          arr.push([prop, obj[prop]])
        }
      }
      return arr;
    },


// ---------------------------------------------------------------------------


// -------------------3-------------------

/** Convert dash/underscore delimited words into camel casing.
 * Te first word would be capitilized only if original word
 * is capitilized.
 * @example
 * toCamelCase("the-stealth-warrior")
 * //returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior")
 * //returns "TheStealthWarrior"
 * @function
 * @name toCamelCase
 * @param {String} str The word to convert.
 * @returns {String} The converted word.
 */

  toCamelCase:

    function toCamelCase(str = '') {
      return str.replace(/([-_])+/g, ' ')
        .split(' ')
        .map(
          (item, i) =>
            i ? item[0].toUpperCase() + item.slice(1)
              : item 
        )
        .join('');
    },


// ---------------------------------------------------------------------------


// -------------------4-------------------

/** Reverses each word in the given sentence.
 * @example
 * reverseSentence(" A fun little challenge! ")
 * //returns " A nuf elttil !egnellahc "
 * @function
 * @name reverseSentence
 * @param {String} sentence The sentence to reverse it words.
 * @returns {String} The resulted sentence.
 */

  reverseSentence:

    function reverseSentence(sentence = '') {
      return sentence.split(' ')
        .map(
          item => 
            item.split('')
            .reverse()
            .join('')
        )
        .join(' ');
    },

  
// ---------------------------------------------------------------------------


// -------------------5-------------------

/** Returns given string expanded by next rule:
 * the first occurance of a numeric value should be the number of 
 * times each character behind it is repeated, until the next
 * numeric value appears. If there are two consecutive numeric
 * characters the first one is ignored. If there are two consecutive
 * alphabetic characters then the first character has no effect
 * on the one after it.
 * @example
 * stringExpansion('3D2a5d2f')
 * //returns 'DDDaadddddff'
 * stringExpansion('3d332f2a')
 * //returns 'dddffaa'
 * stringExpansion('abcde')
 * //returns 'abcde'
 * @function
 * @name stringExpansion
 * @param {String} str The string to expanse.
 * @returns {String} The resulted string.
 */

  stringExpansion:

    function stringExpansion(str = '') {
      let arr = str.match(/\d[a-zA-Z]+/g);
      return arr ? 
        arr
        .map(
          item => 
            item[1].repeat(+item[0]) + item.slice(2)
        )
        .join('')
        : str;
    },


// ---------------------------------------------------------------------------


// -------------------6-------------------

/** Returns largest number passed like an argument.
 * @example
 * largest(2, 0.1, -5, 100, 3)
 * //returns 100
 * @function
 * @name largest
 * @param {...Number} numbers The list of numbers to compare.
 * @returns {Number} The largest number.
 */

  largest:

    function largest(...numbers) {
      return numbers.reduce(
          (max, current) =>
            max < current ? current: max
        );
    },


/** Returns smallest number passed like an argument.
 * @example
 * smallest(2, 0.1, -5, 100, 3)
 * //returns -5
 * @function
 * @name smallest
 * @param {...Number} numbers The list of numbers to compare.
 * @returns {Number} The smallest number.
 */

  smallest:

    function smallest(...numbers) {
      return numbers.reduce(
          (min, current) =>
            min > current ? current: min
        );
    },


// ---------------------------------------------------------------------------


// -------------------7-------------------

/** Transforms array of numbers to array of function that 
 * returns value from base array.
 * @example
 * transform([10, 20, 30, 40, 50])
 * //const newArray = transform([10, 20, 30, 40, 50])
 * //newArray[3] should returns 40
 * @function
 * @name transform
 * @param {Array} numbers The list of numbers to transform.
 * @returns {Array} The array of functions.
 */

  transform:

    function transform(numbers = []) {
      return numbers.length ?
        numbers.map(
        item => 
          () => item
      )
      : undefined;
    },


// ---------------------------------------------------------------------------


// -------------------8-------------------

/** Returns the sum of all given numbers. 
 * @example
 * sum(1,3,5,7)
 * //should return 16
 * @function
 * @name sum
 * @param {...Number} numbers The list of numbers to sum.
 * @returns {Number} The sum of given numbers.
 */

  sum:

    function sum(...numbers) {
      return numbers.length !== 1
        ? numbers[0] + sum(...numbers.slice(1))
        : numbers[0];
    },


// ---------------------------------------------------------------------------


// -------------------9-------------------

/** Logs given values one by one till zero with one second delay. 
 * @example
 * countDown(3)
 * //logs 3 2 1 0
 * @function
 * @name countDown
 * @param {Number} number The starting counter number.
 * @returns {Void}
 */

  countDown:

    function countDown(number) {
      setTimeout(
        number
        ? () => countDown(number - 1)
        : () => number,
        1000
      )
      console.log(number);
    },


// ---------------------------------------------------------------------------


// -------------------10------------------

/** Polyfill for a .bind(). 
 * @example
 * function addPropToNumber(number) { return this.prop + number; }
 * var bound = addPropToNumber.myBind({ prop: 9 });
 * bound(1);
 * // 10
 * @method
 * @name myBind
 * @param {Object} context The context
 * @param {*} arguments The list of the additional arguments.
 * @returns {Void}
 */

  myBind:

    Function.prototype.myBind =
      function () {
        const func = this;
        const context = arguments[0];
        const firstArgs = [].slice.call(arguments, 1);
        return function () {
          const args = firstArgs.concat([].slice.call(arguments));
          return func.apply(context, args);
        };
      }

}

require('make-runnable');