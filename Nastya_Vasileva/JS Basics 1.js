//1 Task
function splitAndMerge(str, sp) {
    return str.split(" ").map(function (words) {
        return words.split('').join(sp);
    } ).join(" ");
}
console.log(splitAndMerge("My name is John"," "));

//2 Task
function convert(hash) {
    let result = [];
    Object.keys(hash).map(function (key) {
        result.push([key, hash[key]]);
    })
    return result;
}
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

//3 Task
function toCamelCase(str) {
    let words = str.replace(/-|_/g, " ").split(" ");
    for (let i=1; i<words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join("");
}
console.log(toCamelCase("The_Stealth_Warrior"));

//4 Task
function reverseFunc(str) {
    return str.split(" ").map((words)=>{
        return words.split("").reverse().join("")
    }).join(" ");
}
console.log(reverseFunc("A fun little challenge!"));

//5 Task
function stringExpansion(str) {
    let matchElem = str.match(/\d[A-Za-z]+/g);
    return matchElem!=null ?
        matchElem.map( elements => {
            return elements[1].repeat(elements[0]);
        }).join("")
        : str;
}
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("3d332f2a"));

//6 Task
//largest
function largest() {
   let mass= Array.from(arguments);
   return Math.max.apply(null, mass);
}
//smallest
function smallest() {
    let mass= Array.from(arguments);
    return Math.min.apply(null, mass);
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//7 Task
function transform(baseArray) {
    return baseArray.map( definition => {
        return function () {
            return definition;
        };
    });
}
const newArray = transform([10, 20, 30, 40, 50]);
console.log(newArray[0]());

//8 Task
function sum(mass){
    return mass.length===0 ? 0 : mass[0] + sum(mass.slice(1));
}
console.log(sum([1,3,5,7]));

//9 Task
function countDown(n) {
        setTimeout(function count() {
            console.log(n);
            if (n>0) setTimeout(count, 1000);
            n--;
        }, 1000);
}
countDown(5);

//10 Task
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
   }
}

function addPropToNumber(number) { console.log(this.prop + number); };
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);
