function splitAndMerge(str, sp) {
	const words =	str.split(" ");
	for (let i in words) {
		words[i] = words[i].split("").join(sp);
	}
	return words.join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));
