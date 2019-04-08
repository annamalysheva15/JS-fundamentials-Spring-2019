//ES6
function countDown(number) {
	for (let i = number; i >=0; --i) {
		setTimeout( () => console.log(i), (number-i)*1000);
	}
}

//ES5
function countDownES5(number) {
	for (var i = number; i >=0; --i) {
		setTimeout(
			//IIFE
			(function(j){
				return function(){console.log(j)};
			})(i),
			(number-i)*1000
		);
	}
}

// countDown(3);
countDownES5(3);