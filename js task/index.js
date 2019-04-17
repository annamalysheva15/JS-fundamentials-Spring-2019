

// 1. Write a function splitAndMerge Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.
//  First we need to divide the sentence into words(Use separator space); 
// and then divide each word into characters(Use separator empty string); 
// and then merge each characters with the specified sp; 
// at last merge all the words(Use separator space) and return it.

function splitAndMerge(str, sp) {
    return str.split(" ").map(function (word) {
        return word.split("").join(sp);
    }).join(" ")
}

console.log(splitAndMerge("Hello World!", ",")); //"H,e,l,l,o W,o,r,l,d,!"
console.log(splitAndMerge("My name is John", " ")); //"M y n a m e i s J o h n"



// 2. Write a function convert Convert a hash into an array. 
// Nothing more, Nothing less. {name: 'Jeremy', age: 24, role: 'Software Engineer'} 
// should be converted into [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

var obj = {
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
}

var convert = Object.keys(obj).map(function (key) {
    return [key, obj[key]];
});

console.log(convert); //[["name","Jeremy"],["age",24],["role","Software Engineer"]] из массива
console.log(JSON.stringify(convert));// будет приводить сразу к строке [["name","Jeremy"],["age",24],["role","Software Engineer"]]


console.log(JSON.stringify(Object.entries(obj))); //[["name","Jeremy"],["age",24],["role","Software Engineer"]]



// 3. Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized. 
// Example: toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

var myString = "the-stealth-warrior";
// var myString = "The_Stealth_Warrior";
var toCamelCase = myString.replace(/[_-]([a-z])/gi, function (g) { return g[1].toUpperCase(); });

console.log(toCamelCase);//theStealthWarrior
console.log(toCamelCase);//TheStealthWarrior

//через цикл

function toCamelCase(str) {
    var array_words = [];
    array_words = str.replace(/[-_]/g, " ").split(' ');
    for (var i = 1; i < array_words.length; i++) {
        array_words[i] = array_words[i].charAt(0).toUpperCase() + array_words[i].slice(1);
    }
    return array_words.join('');
}

console.log(toCamelCase("the-stealth-warrior"));//theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior"));//TheStealthWarrior




// 4. Write a function that takes a sentence (string) and reverses each word in the sentence. 
// Example: " A fun little challenge! " => " A nuf elttil !egnellahc "

function reverse(str) {
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join("");
    }).join("  ");
};


console.log(reverse("A fun little challenge!")); // A  nuf  elttil  !egnellahc


// 5) Write a function stringExpansion
function stringExpansion(str) {
    return str.replace(/(\d)([^\d]*)/g, function (match) {
        return match.slice(1).repeat(match[0]);
    })
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));


// 6.Write largest and smallest functions that returns the largest and smallest number passed like a argument. 
// Example: largest(2, 0.1, -5, 100, 3) // 100 smallest(2, 0.1, -5, 100, 3) // -5

var arr = [-1, 9, -1.5, 56, 58.5];
var min = Math.min(...arr);
console.log(min); //-1.5


function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

console.log(arrayMax(arr));//58.5

// 7) Write function transform that will transform array of numbers to array of functions
function transform(array) {
    return array.map(function (value) {
        return function () {
            return value;
        };
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]());//40
console.log(newArray[4]());//50




// 8. Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. 
// Note: function should use recursion
// Example: sum(1,3,5,7); //should return 16

var sum = function () {
    let args = [...arguments];
    //  строку  выше можно записать let args= Array.from(arguments); либо для ES5 let args=[].slice.call(arguments);
    return (args.length === 1) ? args[0] : args[0] + sum(...args.slice(1))
}

console.log(sum(1, 2, 3));//6

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

//   9. Write function countDown. Function expects number and logs values one by one till zero with one second delay. 
// Example: countDown(3); should log 3 2 1 0

function printNumbersInterval(i) {
    console.log(i--);
    var timerId = setInterval(function () {
        if (i >= 0) {
            console.log(i--);
        } else {
            clearInterval(timerId)
        }
    }, 1000);
}

printNumbersInterval(3);//3 2 1 0

function printNumber(i) {
    setTimeout(function go() {
        if (i > 0) {
            console.log(i--)
            setTimeout(go, 1000)
        }
        else {
            console.log(i);
        }
    }, 0);

}


console.log(printNumber(3));//3 2 1 0

// 10. Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() 
// - take context as a first parameter and the list of arguments separated by comma. 
// Hint: play with the function in Function.prototype and see what this points to inside it. 
// Your code should look like: Function.prototype.myBind = function () { // your code here }

Example: function addPropToNumber(number) { return this.prop + number; } var bound = addPropToNumber.myBind({ prop: 9 }); bound(1) // 10

Function.prototype.myBind = function (context) {
    var func = this;
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return func.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
}

function addPropToNumber(number) {
    return this.prop + number;
}


var bound = addPropToNumber.myBind({ prop: 9 });

console.log(bound(1));//10



