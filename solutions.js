let solutions = {};


/* 1 - Write a function splitAndMerge Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. 
First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); 
and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.
Example: splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n" 
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"*/

solutions.splitAndMerge = function(str, sp){
  return str.split(' ').map(separateWords => separateWords.split('').join(sp)).join(' ');
}




/* 2 - Write a function convert Convert a hash into an array. Nothing more, Nothing less. 
{name: 'Jeremy', age: 24, role: 'Software Engineer'} should be converted into [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]*/

solutions.convert =  function(hash) {
  let arrayFromHash = new Array();

  for (let key in hash) {
    let array = [];
    array.push(key);
    array.push(hash[key]);
    arrayFromHash.push(array);
  }
  return(arrayFromHash);
}




/* 3 - Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized. 
Example: toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"*/

// option 1: using a regexp + string.replace
solutions.toCamelCaseByReplace = function(str) {
  return str.replace(/[-_][a-z]/g, char => char.toUpperCase()).replace(/[-_]/g, '');
}

// option 2: using a regexp and a loop through an array
solutions.toCamelCaseByLoop = function(str) {
  arr = str.split(/[-_]+/);
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  };
  return arr.join('');
}




/* 4 - Write a function that takes a sentence (string) and reverses each word in the sentence. Example: " A fun little challenge! " => " A nuf elttil !egnellahc " */

solutions.reverseEachWord = function(str) {
  let wordArray = str.split(' ');
  let wordReversedString = wordArray.map(eachWord=>eachWord.split('').reverse().join('')).join(' ');
  return wordReversedString;
}




/* 5 - Write a function stringExpansion. Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
The numeric values represent the occurance of each letter preceding that numeric value. 
There should be no numeric characters in the final string. Empty strings should return an empty string.
The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears. stringExpansion('3D2a5d2f') === 'DDDaadddddff' 
If there are two consecutive numeric characters the first one is ignored. stringExpansion('3d332f2a') === 'dddffaa'. 
If there are two consecutive alphabetic characters then the first character has no effect on the one after it. 
stringExpansion('abcde') === 'abcde' Your code should be able to work for both lower and capital case letters. */

solutions.stringExpansion = function(str) {
  let expandedString = str.replace(/(\d)(\D)/gi, function(match, num, char) {return char.repeat(parseInt(num));}) //expand pairs of type '3d' into 'ddd'
  let cleanString = expandedString.replace(/(\d)/g, ''); //clean up - delete excessive numbers which do not influence number of the characters following
  return cleanString;
}




/* 6 - Write largest and smallest functions that returns the largest and smallest number passed like a argument. */

solutions.largest = function() {

  let args = [];

  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }

  return Math.max(...args);
} 

solutions.smallest = function() {
  let args = [];

  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }

  return Math.min(...args);
}




/* 7 - Write function transform that will transform array of numbers to array of functions that will return value from a base array.
Example: const baseArray = [10, 20, 30, 40, 50]; const newArray = transform(baseArray); newArray3; // should return 40 newArray4; // should return 50 */

solutions.transform = function(arr) {
  return arr.map(item => () => item);
}




/* 8 - Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion*/

solutions.sum = function(...arr) {
  let result = arr[0];
  let arrayFromArgs = arr.slice(1);
  
  if (arrayFromArgs.length == 0) {
    return result;
    }

  return result + solutions.sum(...arrayFromArgs);
  console.log (result);
}




/* 9 - Write function countDown. Function expects number and logs values one by one till zero with one second delay. Example: countDown(3); // 3 2 1 0 */

function countDown(num) {
  let i = num;
  let timer = setTimeout(function start() {
    console.log(i);
    if (i > 0) setTimeout(start, 1000);
    i--;
  }, 1000);
}




/* 10 - Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter 
and the list of arguments separated by comma. Hint: play with the function in Function.prototype and see what this points to inside it. 
Your code should look like: Function.prototype.myBind = function () { // your code here } Example: function addPropToNumber(number) { return this.prop + number; } */

Function.prototype.myBind = function (context /* ...args */) {
    let fn = this;
    let args = [].slice.call(arguments, 1);

    return function () {
      return fn.apply(context, args.concat([].slice.call(arguments)));
    };
}

module.exports = solutions;