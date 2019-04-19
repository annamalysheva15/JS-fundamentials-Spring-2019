/* -- TASK 1 -- */ 
function splitAndMerge(str, sp){
	var result = str.replace(' ', ',');
	var splits = result.split('');
	var withSym = new Array;
	for(i = 0; i < splits.length; i++){
		withSym.push(splits[i] + ' ');
	}
	var done = withSym.join(sp);
	return done;
}

console.log(splitAndMerge('Hello world', ','));

/* -- TASK 2 -- */

function convert(obj){
	var final = Object.keys(obj).map(function(key){
		return [key, obj[key]];
	})

	return final;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

/* -- TASK 3 -- */

function exchange(str) {
	var total = '';
	for (i = 0; i < str.length; i++) {
		if(str[i] == '-' || str[i] == '_') {
			total = total + str[i + 1].toUpperCase();
			i++;
		} else if(i == 0){
			total = total + str[i].toUpperCase();
		} else {
			total = total + str[i];
		}
	}
	return total;
}

console.log(exchange('the-stealth-warrior'));
console.log(exchange('The_Stealth_Warrior'));

/* -- TASK 4 -- */

function reverseWord(str){
	var arr = [];
	var word = '';
	for(i = 0; i <= str.length; i++){
		if(str[i] != ' ' && i < str.length){
			word = word + str[i];	
		} else {
			arr.push(word);
			word = '';
		}
	}
	var total = [];
	for(i = 0; i < arr.length; i++){
		var b = arr[i].split('').reverse().join('');

		total.push(b);
	}
	var result = '';

	for(i = 0; i < total.length; i++){
		i != total.length - 1 ? result = result + total[i] + ' ' : result = result + total[i];
	}

	return result;
}

console.log(reverseWord('A fun little challenge!'));

/* -- TASK 5 -- */

function stringExpension(str){
	var regexp = /(\d)([^\d])*/g;
	return str.replace(regexp, function(entry){
		return entry.slice(1).repeat(entry[0]);
	})	

}

console.log(stringExpension('3D2a5d2f'));
console.log(stringExpension('3d332f2a'));
console.log(stringExpension('abcde'));

/* -- TASK 6 -- */

function largest() {
	var array = Array.prototype.slice.call(arguments);
	var large = 0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] > large) {
			large = array[i];
		}
	}
	return large;
}

console.log(largest(2, 0.1, -5, 100, 3));

function smallest() {
	var array = Array.prototype.slice.call(arguments);
	var small = 0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] < small) {
			small = array[i];
		}
	}
	return small;
}		

console.log(smallest(2, 0.1, -5, 100, 3));

/* -- TASK 7 -- */ 

function transform (arr){
	var result = [];
	for(var i = 0; i < arr.length; i++) {
		var foo = function(){
			return arr[i];
		}
		result.push(foo());
	}
	return result;
} 

console.log(transform([10, 20, 30, 40, 50])[0]);


/* -- TASK 8 --  */

function sum(...arg){
	if(arg.length == 1) return arg[0]
		return arg[0] + sum(...arg.slice(1));
}

console.log(sum(1,2,3,4,5));

/* -- TASK 9 -- */

function countDown(a){
	setTimeout(function(){
		if(a >= 0){
			console.log(a);
			countDown(a - 1)}
		},1000)
};

console.log(countDown(3));

/* -- TASK 10 -- */

Function.prototype.myBind = function(newThis){
	const currentThis = this;
	return function(...args) {

		return currentThis.apply(newThis, args);
	}
}


function addPropToNumber(number) { 
	return this.prop + number; 
} 
var bound = addPropToNumber.myBind({ prop: 9 }); 
console.log(bound(1));