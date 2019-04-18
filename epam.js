// 1) Write a function splitAndMerge

const splitAndMerge = (str, sp) => {
  const separatedWords = str.split(" ");
  let finalSentence = "";
  for (let i = 0; i < separatedWords.length; i++) {
    separatedWords[i] = separatedWords[i].split("").join(sp);
  }
  finalSentence = separatedWords.join(" ");
  return finalSentence;
};

console.log("1) Function splitAndMerge:");
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));
console.log(splitAndMerge("Thereisnospoon", "0"));
console.log("123");
// 2) Hash into array

const someObject = {
  name: "Jeremy",
  age: 24,
  role: "Software Engineer"
};

const objectToArray = function(obj) {
  const keyValueArray = Object.entries(obj);
  return keyValueArray;
};

console.log("2) Converts hash into array:");
console.log(objectToArray(someObject));

// 3) To camelCase

function toCamelCase(str) {
  const camelCased = str.split("");

  for (let i = 0; i < camelCased.length; i++) {
    switch (camelCased[i]) {
      case "_":
        spliceAndUppercase.apply(camelCased);
        break;
      case "-":
        spliceAndUppercase.apply(camelCased);
        break;
      case "=":
        spliceAndUppercase.apply(camelCased);
        break;
      default:
        camelCased[i] = camelCased[i].toLowerCase();
        break;
    }

    function spliceAndUppercase() {
      this.splice(i, 1);
      this[i] = this[i].toUpperCase();
    }
	}
	console.log(camelCased[0])
	console.log(str[0])
	camelCased[0] === str[0] 
		? console.log('asdasdasd')
		: camelCased[0].toUpperCase()
		return camelCased.join("");
}

console.log("3) Converts words into camelcase :");
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("THE=STEALTH=WARRIOR"));

// 4) Reverse string

function stringReverser(string) {
  const newArray = string.split("");
  const reversedString = [];

  for (let i = newArray.length - 1; i >= 0; i--) {
    reversedString.push(newArray[i]);
  }

  return reversedString.join("");
}

console.log("4) reverse each word in the sentence: ");
console.log(stringReverser(" A fun little challenge! "));

// 5) Write a function stringExpansion

function stringExpansion(string) {
  let expandedString = "";
  for (let i = 0; i < string.length; i++) {
    if (isNaN(Number(string[i]))) {
      if (isNaN(Number(string[i - 1]))) {
        expandedString += string[i];
      } else {
        for (let j = 0; j < string[i - 1]; j++) {
          expandedString += string[i];
        }
      }
    }
  }
  return expandedString;
}

console.log("5) function stringExpansion: ");
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3d3452F2aaa"));
console.log(stringExpansion("abcde"));

// 6) Write largest and smallest functions.

function largest(...args) {
  return Math.max(...args);
}

function smallest(...args) {
  return Math.min(...args);
}

console.log("6) largest and smallest functions: ");
console.log(`largest: ${largest(2, 0.1, -5, 100, 3)}`);
console.log(`smallest: ${smallest(2, 0.1, -5, 100, 3)}`);

// 7) Function array to numbers
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

function transform(baseArray) {
  baseArray = baseArray.map(function(item) {
    return function() {
      return item;
    };
  });
  return baseArray;
}

console.log("7) Function array to numbers: ");
console.log(newArray[3]());
console.log(newArray[4]());

// 8) Write function sum

const sum = function(...args) {
  const numArray = [...args];
  return numArray.reduce(function(acc, curr) {
    return acc + curr;
  });
};

console.log("8) Function sum: ");
console.log(sum(1, 3, 5, 7));
console.log(sum(5, -27, -5, 7));

// 9) Write function countDown.

function countDown(seconds) {
  let counter = seconds;
  const tickTacking = setInterval(function() {
    console.log(counter);
    counter--;
    if (counter < 0) {
      clearInterval(tickTacking);
      console.log(`9) Function countDown: ${seconds} seconds have passed!`);
    }
  }, 1000);
}

countDown(3);

// 10) Write a polyfill for a .bind()

Function.prototype.myBind = function(func) {
  let context = this;
  return function() {
    return context.apply(func, arguments);
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}

const bound = addPropToNumber.myBind({ prop: 9 });

console.log(`10) Polyfill for a .bind() : ${bound(1)}`);

module.exports = { splitAndMerge, objectToArray, someObject, toCamelCase };
