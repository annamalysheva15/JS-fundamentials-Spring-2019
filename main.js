// 1) Write a function splitAndMerge
// Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.
// First we need to divide the sentence into words(Use separator space);
// and then divide each word into characters(Use separator empty string);
// and then merge each characters with the specified sp;
// at last merge all the words(Use separator space) and return it.
// Example:
// splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
// splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"

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

// 2) Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

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

// 3) Complete the method/function so that it converts dash/underscore
// delimited words into camel casing.
// The first word within the output should be capitalized only if
// the original word was capitalized.
// Example:

function toCamelCase(str) {
	const camelCased = str.split("");

	const spliceAndUppercase = function() {
		this.splice(i, 1);
		this[i] = this[i].toUpperCase();
	};
	for (var i = 0; i < camelCased.length; i++) {
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
	}
	return camelCased.join("");
}

console.log("3) Converts words into camelcase :");
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("THE=STEALTH=WARRIOR"));

// 4) Write a function that takes a sentence (string)
// and reverses each word in the sentence. Example:
// " A fun little challenge! " => " A nuf elttil !egnellahc "
