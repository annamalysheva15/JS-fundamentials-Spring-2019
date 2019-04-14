'use strict';

/* --------------------- COMMON FUNC ---------------*/

const actWithDOM = (elmId, buttonClass, func, param1, param2) => {
  const baseElm = document.querySelector('#' + elmId);
  const buttonElm = baseElm.querySelector(buttonClass);

  buttonElm.addEventListener('click', () => {
    const inputElm = baseElm.querySelector('#' + param1);
    const inputSecondElm = baseElm.querySelector('#' + param2);
    let resultElm = baseElm.querySelector('span');

    if (param2 && inputElm.value && inputSecondElm.value) {
      resultElm.textContent = func(inputElm.value, inputSecondElm.value)
    } else if (inputElm.value) {
      resultElm.textContent = func(inputElm.value) 
    } else {
      resultElm.textContent = func();
    };
  })
}

/*----------- Task 1 -----------*/

const splitAndMerge = (value='Input_something', separator=' ') => {
  let newArr = [];
  value.split(' ').forEach((elm) => {
    newArr.push(elm.split('').join(separator));
  })
  return newArr.join(' ');
}

actWithDOM('split-and-merge', '.button', splitAndMerge, 'split-text', 'split-sep');

/*----------- Task 2 -----------*/

const convertIntoArrayElm = document.querySelector('#convert-into-array');
const convertIntoArrayButton = convertIntoArrayElm.querySelector('button');
const convertIntoArrayResult = convertIntoArrayElm.querySelector('span');
const TEST_OBJ = {name: 'Jeremy', age: 24, role: 'Software Engineer'};

const convert = (obj) => {
  const result = Object.keys(obj).map((key) => ([key, obj[key]]))
  convertIntoArrayResult.textContent = JSON.stringify(result);
}

convertIntoArrayButton.addEventListener('click', () => convert(TEST_OBJ));

/*----------- Task 3 -----------*/

const SIGN = /[_-]+/g;

const toCamelCase = (str='input_something') => str.replace(SIGN, ' ').split(' ').map((elm, index) => {
  return (index > 0) ? elm[0].toUpperCase() + elm.slice(1) : elm
}).join('');

actWithDOM('convert-to-camel-case', '.button', toCamelCase, 'to-camel');

/*----------- Task 4  -----------*/

const reverseWords = (str='Input something') => str.split(' ').map((elm) => elm.split('').reverse().join('')).join(' ');

actWithDOM('reverce-words', '.button', reverseWords, 'reverse-text');

/*----------- Task 5  -----------*/

const REG_EXP = /\d+[A-z, А-я]/g;

const stringExpansion = (str="Input something") => {
  return str.replace(REG_EXP, (entry) => {
    const num = parseInt(entry[entry.length - 2])+1;
    const elm = entry[entry.length - 1];
    return new Array(num).join(elm);
  });
};

actWithDOM('numbers-to-letters', '.button', stringExpansion, 'numbers-letters-input');

/*----------- Task 6  -----------*/

function largest(elms = '0') {
  const array = (typeof(elms) === 'string') ? elms.split(',') : Array.from(arguments);
  return Math.max.apply(null, array);
}

actWithDOM('smallest-largest', '.button-large', largest, 'small-large');

function smallest(elms = '0') {
  const array = (typeof(elms) === 'string') ? elms.split(',') : Array.from(arguments);
  return Math.min.apply(null, array);
}

actWithDOM('smallest-largest', '.button-small', smallest, 'small-large');

/*----------- Task 7  -----------*/

const ntfElm = document.querySelector('#num-to-func span');
const ntfButton = document.querySelector('#num-to-func .button');

const transform = (arr) => {
  return arr.map((item) => {
    return function() {
      return item;
    };
  });
};

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

ntfButton.addEventListener('click', () => {
  ntfElm.textContent = newArray[4]();
})

/*----------- Task 8  -----------*/

function sum(elms) {
  let array = (typeof(elms) === 'string') ? elms.split(',') : Array.from(arguments);
  
  let total = 0;

  const add = (arr) => {
    if (arr.length > 0) {
      total += arr[0]*1;
      add(arr.slice(1));
    }
  }

  add(array);

  return total;
};

actWithDOM('sum', '.button', sum, 'sum-input');

/*----------- Task 9  -----------*/

const countdownElm = document.querySelector('#countdown');
const cdInput = countdownElm.querySelector('input');
const cdResult = countdownElm.querySelector('span');
const cdButton = countdownElm.querySelector('button');

const countDown = (num, elm) => {
  if (num >= 0) {
    elm.textContent = num;
    setTimeout(function() {
      num--;
      countDown(num, elm);
    }, 1000);
  }
}

cdButton.addEventListener('click', () => {
  countDown(cdInput.value, cdResult);
})

/*----------- Task 10  -----------*/

Function.prototype.myBind = function(context) { 
  const thisElm = this;
  const prevArgs = [].slice.call(arguments, 1);

  return function() {
    const newArgs = [].slice.call(arguments);
    const allArgs = [].concat(prevArgs, newArgs);
    return thisElm.apply(context, allArgs);
  };
};

