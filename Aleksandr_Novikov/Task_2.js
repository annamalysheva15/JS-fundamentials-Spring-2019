// ES6, too easy.
// function convert(hash) {
// 	return Object.entries(hash)
// }

// Not using Object.entries()
function convert(obj) {
	const result = Array();
	let iterator = 0;

	for (let property in obj) {
		if(obj.hasOwnProperty(property)) {
			result[iterator] = [property, obj[property]];
			++iterator;
		}
	}

	return result;
}

const hash = {
	name: 'Jeremy',
	age: 24,
	role: 'Software Engineer'
};

console.log(convert(hash));