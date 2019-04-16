// 1) Write a function splitAndMerge

const splitAndMerge = function(str, sp) {
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
	role: "Software Engineer",
	hobbies: ["tennis", "laying on sofa"]
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

// 7) Write function transform that will transform array of numbers to array of functions
// that will return value from a base array.
// Example:
// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray[3](); // should return 40
// newArray[4](); // should return 50
