function largest() {
	return Math.max(...arguments);
}

function smallest() {
	return Math.min(...arguments);
}

console.log(largest(2, 0.1, -5, 100, 3)); // 100
console.log(smallest(2, 0.1, -5, 100, 3)); // -5