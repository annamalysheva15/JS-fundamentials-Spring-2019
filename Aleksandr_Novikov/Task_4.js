function reverseWords(sentence) {
	words = sentence.split(" ");
	for (let index in words) {
		words[index] = words[index].split("").reverse().join("");
	}
	return words.join(" ");
}

console.log(reverseWords(" A fun little challenge! "), '<=');