// 1) Write a function splitAndMerge
function splitAndMerge(str, sep) {
  if (arguments.length != 2 &&
      typeof str === "string" &&
      typeof sep == "string") {
    return "Usage splitAndMerge(string, separator)";
  }
  return str.split(" ")
            .map(w => w.split("").join(sep))
            .join(" ");
};


// 2) Write a function convert

  //doesn't work in IE
function convert2(obj) {
  return Object.entries(obj);
};
  //this should work just fine everywhere
function convert1 (obj) {
  var keys = Object.keys(obj),
      i = keys.length,
      newArray = new Array(i);
  while (i--)
    newArray[i] = [keys[i], obj[keys[i]]];
  return newArray;
};


// 3) Write a function toCamelCase
function toCamelCase(str) {
	if (!(arguments.length && typeof str === "string" && str)) {
    return "Enter non-empty string";
  }
	return str.replace(/[_-](\w)/gi,
    function(match, p1){return p1.toUpperCase()}
  );
}


// 4) function that takes a sentence (string) and reverses each word in the sentence.
function splitReverse (str) {
  if (!(arguments.length && typeof str === "string" && str)) {
    return "Enter non-empty string";
  };
  return str.split(" ")
            .map(str =>  str.split("").reverse().join(""))
            .join(" ");
};

// 5) Write a function stringExpansion
function stringExpansion(string) {
  if (!(arguments.length && typeof str === "string" && str)) {
    return "Enter non-empty string";
  };
  return string.replace(/(\d)+([a-z])/gi,
    function(match, p1, p2){return p2.repeat(p1)}
  );
};


// 6) Write largest and smallest functions
function largest() {
  if (!arguments.length){
    return "at least 1 argument is needed";
  };
  return [].reduce.call(arguments,
    function(cur, prev){return cur>prev?cur:prev}
  );
};

function smallest() {
  if (!arguments.length){
    return "at least 1 argument is needed";
  };
  return [].reduce.call(arguments,
    function(cur, prev){return cur<prev?cur:prev}
  );
};


// 7) Write function transform that will transform
// array of numbers to array of functions
function transform(array){
	return array.map(function (num){
		return function(){
      return num;
    };
	});
};


// 8) Write function sum.(use recursion)
function recSum() {
	if (!arguments.length) return "at least 1 argument is needed";
	if (arguments.length > 1){
		var last = [].pop.call(arguments);
		return last + recSum.apply(recSum, arguments);
	}
	else {
		return arguments[0];
  };
};

// 9) Write function countDown
function countDown(num) {
  setTimeout(function f(){
    if (num >= 0) {
      console.log(num--);
      setTimeout(f, 1000);
    } else return;
  }, 0);
};
