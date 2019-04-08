function stringExpansion(string) {
	return string.replace(/(\d+)(\D+)/g, replacer);
}

function replacer(match, p1, p2) {
	let replacement = "";

	//Extracts last digit in first capture group
	const numberOfRepetitions = Number(p1.slice(-1));

	//Appends second capture group (string) to the result
	//Repeats for the amount of times provided by first capture group
	for (let i = 0; i < numberOfRepetitions; ++i) {
		replacement += p2;
	}

	return replacement;
}

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion(""));
console.log(stringExpansion("34ab2Xc16de"));