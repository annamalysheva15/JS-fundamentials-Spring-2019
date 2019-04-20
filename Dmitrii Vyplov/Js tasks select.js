// Task 1

function splitAndMerge (str, sp) {
  str = String(str);

  return str.split(' ').map(string => string.split('').join(sp)).join(' ');
}

// Task 2

function convert(obj) {
  let arr = [];

  for(let key in obj) {
    arr.push([key, obj[key]]);
  }

  return arr;
}

// Task 3

function toCamelCase(str) {
  str = String(str);

  let reg = /[-_]+/,
      arr = str.split(reg);

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

// Test 4

function reverse(str) {
  str = String(str);

  return str.split(' ')
    .map(string => string.split('')
    .reverse().join('')).join(' ');
}

// Task 5

function stringExpansion(str) {
  str = String(str);

  let reg = /\d?[a-z]/ig
      arr = str.match(reg),
      result = '';

  arr.forEach(element => {if(element.length != 1) 
    {element = element[1].repeat(+element[0])}
    result += element;
  });

  return result;
}

// Task 6

function largest() {
  return Math.max.apply(null, arguments);
}

function smallest() {
  return Math.min.apply(null, arguments);
}

// Task 7

function transform(arr) {
  return arr.map(num => {return function() {return num}});
}

// Task 8

let sum = (...args) => (args.length === 0) ? 0 : args[0] + sum(...args.slice(1));

// Task 9

// Task 10