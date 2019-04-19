'use strict';


/*       1 level   */

function splitAndMerge(str = "", sp = "") {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}
let arr = splitAndMerge("Mary Key its fantastic", ",");
console.log(arr);

/*       2 level    */

function convert(obj) {
    return Object.entries(obj);
}

/*      3 level     */

function toCamelCases(str = "", del = "") {
    let words = str.split(del);
    let firstWord = words[0];
    delete words[0];
    let finalArr = words.map(item => item.toString().charAt(0).toUpperCase() + item.toString().slice(1));
    finalArr.unshift(firstWord);


    return  finalArr.join("") ;
}

/*      4 level     */

function toReverse(str) {
    let reverse = str.split("").reverse().join("");
    return reverse
}

/*      5 level     */

let string = "b4f43f34fevdv43vdf4dvdv432g3g43g433g3";

let res = string.match(/[\d+][a-z]|[a-z]*/gi);
console.log(res);

let globalRes = "";
for (let i=0;i<res.length;i++){
    globalRes += replaceNumb(res[i])
};
globalRes = globalRes.split(" ").join("");
    console.log(globalRes);

function replaceNumb(obj) {
    let output = " ";
    let numb = obj.match(/\d/);
    let word = obj.match(/[a-z]/);
    if (word !== null){
        let otherLetters = numb ? obj.slice(2) : obj;
        numb = numb? numb : 1;
        for (let i=0;i<numb[0];i++){
            output += word
        }
        output += otherLetters;
    }
    return output
}

/*      6 level     */

let arrayNumbers = [1,4,100,-3,0];

function theBiggestNumber(someArray) {
 let maxValue = someArray.sort(function (a,b) {
    return a-b;
})
  return maxValue.reverse()[0];
}
console.log(theBiggestNumber(arrayNumbers));

function theSmallestNumber(anyArray) {
    let minValue = anyArray.sort(function (a,b) {
        return a-b;
    })
    return minValue[0];
}
console.log(theSmallestNumber(arrayNumbers));

/*      7 level     */

function transform(numArray) {
    const funcArray = [];
    for (let number of numArray) {
        funcArray.push(() => number)
    }
    return funcArray;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

/*      8 level     */

function sum() {
    const argsArray = Object.values(arguments);
    if (argsArray.length === 1) {
        return (argsArray[0]);
    }
    else {
        return sum(...argsArray.slice(1)) + argsArray[0];
    }
}

/*      9 level     */

function countDown(number) {
    for (let i = number; i >=0; --i) {
        setTimeout( () => console.log(i), (number-i)*1000);
    }
}

/*      10 level     */

Function.prototype.myBind = function(context) {
    const thisElement = this;
    const prevArgs = [].slice.call(arguments, 1);

    return function() {
        const newArgs = [].slice.call(arguments);
        const allArgs = [].concat(prevArgs, newArgs);
        return thisElement.apply(context, allArgs);
    };
};