Function.prototype.myBind = function () {
	const func = this;
	const that = arguments[0];
	let args = Object.values(arguments).slice(1);

	return function() {
		argsToPass = args.concat(Object.values(arguments));
		return func.apply(that, argsToPass);
	};
};

function addPropToNumber(number) { return this.prop + number; }

var bound = addPropToNumber.myBind({ prop: 9 });
console.log("bound(1): ", bound(1)); // 10
console.log("bound(3): ", bound(3)); // 12
console.log("bound(5): ", bound(5)); // 14

var staticBound = addPropToNumber.myBind({ prop: 9 }, 12);
console.log("staticBound(1): ", staticBound(1)); // 21
console.log("staticBound(3): ", staticBound(3)); // 21
console.log("staticBound(5): ", staticBound(5)); // 21