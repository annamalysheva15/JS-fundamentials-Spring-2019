//Task 1
function splitAndMerge(str, sp) {
    return str.split(" ").map(function(string) {
        return string.split('').join(sp);
    } ).join(" ");
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello Wordld!", ","));


// Task 2
function convert(obj) {
    var array = [];
    Object.keys(obj).map(function (key) {
        array.push([key, obj[key]]);
    })
    return array;
}
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


//Task 3
function camelTrasformation(str) {
    var arr = str.replace(/-|_/g, " ").split(" ");
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
}

console.log(camelTrasformation("the-stealth-warrior"));
console.log(camelTrasformation("The_Stealth_Warrior"));


//Task 4
function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr(" A fun little challenge! "));


//Task 5
function stringExpansion(str) {
    var characters = str.match(/\d[A-za-z]+/g);
    return characters != null ? characters.map(elements => {
        return elements[1].repeat(elements[0]);
    }).join("") : str;
}

console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("3d332f2a"));


// Task 6 
//Largest functions
function searchMaxNumber(...arguments) {
    return Math.max(...arguments);
}
//Smallest functions
function searchMinNumber(...arguments) {
    return Math.min(...arguments);
}

console.log(searchMaxNumber(2, 0, 1, -5, 100, 3));
console.log(searchMinNumber(2, 0, 1, -5, 100, 3));


//Task 7
function transform(array) {
    array = array.map(function(number) {
        return function() {
            return number;
        };
    });
    return array;
}

var newArray = transform([10, 20, 30, 40, 50]);

console.log(newArray[3]());
console.log(newArray[4]());


//Task 8
function sum(num) {
    num = num.toString();
    return num.length === 0 ? 0 : + num[0] + sum(num.slice(1));			
}

console.log(sum(1357));


//Task 9
function countDown(x) {
   setTimeout(function count() {
       if (x >= 0) {
        console.log(x--);
        setTimeout(count, 1000);
   } else return;
}, 1000);
}

countDown(3);


//Task 10
Function.prototype.myBind = function(...arg) {
    var object = this;
    var parametrs = arg.slice(1);
    return function(...arg2) {
        object.apply(arg[0], [...parametrs, ...arg2])
    }
}

function addPropToNumber(number) {
    console.log(this.prop + number); }; 
    var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);