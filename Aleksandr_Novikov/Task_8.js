function sum() {
	const argsArr = Object.values(arguments);
	if (argsArr.length === 1) {
		return (argsArr[0]);
	}
	else {
		return sum(...argsArr.slice(1)) + argsArr[0];
	}
}

console.log(sum(1,3,5,7)); //should return 16
console.log(sum(3,3,85,7)); //should return 98