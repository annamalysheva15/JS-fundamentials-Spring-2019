//1
function splitAndMerge(str, sp) {
    var newStr = str.split(" ").join("").split("").join(sp);
    return newStr;
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));


//2
function convert(hash) {
    var hashVal = Object.values(hash);
    var hashKeys = Object.keys(hash);
    var arr = [];
    hashKeys.map(function(hashKey, i) {
        arr.push([hashKey, hashVal[i]])
    });
    return arr;
}

convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})

//3
function toCamelCase(str) {
    var words = str.split(/[_-]/g);
    var i;
    for (i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
 	return words.join('');
}

toCamelCase('the_stealth_warrior');
toCamelCase('The_stealth_Warrior');

//4
function reverseStr(str) {
    var arr = [];
    str.split(" ").map(function(part) {
        return arr.push(part.split("").reverse().join(""))
    })
    return arr.join(" ")
}

reverseStr("A fun little challenge!")

//5
function stringExpansion(str) {
var newStr = "";
for (var i = 0; i < str.length; i++) {

	if(!isNaN(str[i])){
				 for (var j = 0; j < +str[i] - 1; j++) {
         newStr += str[i+1];
      }
    } else {
      newStr += str[i];
    }}
return newStr;
}

stringExpansion("3D2a5d2f")

//6
function smallest() {
  return Math.min.apply(null, arguments);
}
console.log(smallest(2, 0.1, -5, 100, 3));

function largest() {
  return Math.max.apply(null, arguments);
}
console.log(largest(2, 0.1, -5, 100, 3));

//7
function transform(arr) {
  return arr.map(function(item) {
    return function() {
      return item;
    }
  });
}
var arr = transform([10, 20, 30, 40, 50]);
console.log(arr[3]());
console.log(arr[4]());

//8
function sum() {
    var newArr = [].slice.call(arguments);
    if (newArr.length == 1) {
        return newArr[0];
    }
    return newArr[0] + sum.apply(null, newArr.slice(1));
}
console.log(sum(1, 3, 5, 7));

//9
function countDown(n) {
  var timer = setInterval(function() {
    if (n >= 0) {
      console.log(n);
      n = n - 1;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
countDown(3);

//10
Function.prototype.myBind = function(context) {
  var func = this;
  return function() {
    return func.apply(context, arguments);
  }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));

