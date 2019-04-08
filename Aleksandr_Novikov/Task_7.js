function transform(numbArr) {
	const funcArr = [];
	for (let number of numbArr) {
		funcArr.push(() => number)
	}
	return funcArr;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50