/*1*/

function splitAndMerge (str, separator) {
  let words=[];
  str.split(' ').forEach (function (word) {
    words.push(word.split('').join(separator));
  });
  return words.join(' ');
}

console.log (splitAndMerge("My name is John"," "));
console.log (splitAndMerge("Hello World!", ","));

/*2*/

function convert(hash) {
  let arr=[];
  Object.keys(hash).forEach(function (item) {
    arr.push([item, hash[item]]);
  });
  return arr;
}

console.log (convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

/*3*/

function toCamelCase (str) {
  return str.split(/-|_/)
            .map (function callback(item, index) {
              if (index==0)
                return item.charAt(0)+item.slice(1).toLowerCase();
              else
                return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase();
             })
            .join('');
}

console.log (toCamelCase("The_Stealth_Warrior"));
console.log (toCamelCase("the-stealth-warrior"));

/*4*/

function reverseWords (str) {
  return str.split(' ')
            .map (function (item) {
              return item.split('').reverse().join(''); })
            .join(' ');
}

console.log (reverseWords(" A fun little challenge! "));

/*5*/

function stringExpansion(string) {
  return string.replace(/(\d)+([a-zA-Z])/g,
    function(str, p1, p2){return p2.repeat(p1)}
  );
};

console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('abcde'));
console.log(stringExpansion('2abcde2f'));

/*6*/

function largest () {
  if (arguments.length==0)
    return Error('The function must have at least one argument.');
  return Math.max.apply(null, arguments)
}

function smallest () {
  if (arguments.length==0)
    return Error('The function must have at least one argument.');
  return Math.min(...arguments)
}

console.log (largest(2, 0.1, -5, 100, 3));
console.log (smallest(2, 0.1, -5, 100, 3));
console.log (smallest());

/*7*/

function transformArray (arr) {
  return arr.map ( function (item) {
    return function() {
      return item;
    }
  })
}

const baseArray = [10, 20, 30, 40, 50]; 
const newArray = transformArray(baseArray); 
console.log (newArray[3]());
console.log (newArray[4]());

/*8*/

function sum () {
  if (arguments.length==0)
    return Error('The function must have at least one argument.');
  return arguments.length!=1 ? [].pop.call(arguments) + sum.apply(null, arguments) : arguments[0];
}

console.log(sum(1,3,5,7));

/*9*/

function countDown(number) { 
  if (number>=0) 
    setTimeout(function () {
      console.log(number)
      countDown(number-1);
    }, 1000);
}
countDown(5);

/*10*/

Function.prototype.myBind = function () { 
  if (arguments.length==0)
    return Error('The function must have at least one argument.');
  let newContext = this; 
  let args=[].slice.call(arguments);
  let context = args[0];
  args.shift();
  return function() { 
    let args2=[].slice.call(arguments);;
    return newContext.apply(context, args.concat(args2));
  };
}

function addPropToNumber(number) { return this.prop + number; } 
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));

function addPropToNumber2(number) { return this.prop + number; } 
var bound = addPropToNumber.myBind({ prop: 9 }, 1);
console.log(bound());