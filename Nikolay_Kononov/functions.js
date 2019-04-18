// 1
function splitAndMerge(str, sp){
    let a = str.split(" ");
    let b = [];
    for(i=0; i<a.length; i++){
        b[i] = a[i].split("").join(sp);
    }
    return b.join(" ");
}

// 2
function convert(obj){
    let a = [];
    for (var key in obj){
        let b = [];
        b.push(key);
        b.push(obj[key]);
        a.push(b);
    }
    return a;
}

// 3
function toCamelCase(string=""){

    if (string.indexOf("-") > -1) {
    const a = string.split("-");
    for (let i=0; i<a.length; i++){
        a[i] = a[i].charAt(0).toUpperCase().concat(a[i].slice(1, a[i].length));
        }
    return a.join("");
    }

    if (string.indexOf("_") > -1) {
        const a = string.split("_");
        for (let i=0; i<a.length; i++){
            a[i] = a[i].charAt(0).toUpperCase().concat(a[i].slice(1, a[i].length));
        }
        return a.join("");
    }
}

// 4
function wordReverse(str){
    let a = str.split(" ");
    let b = [];
    a.forEach( (element, i) => {
         b[i] = element.split("").reverse().join("");
    });
    return b.join(" ");
}

// 5
function stringExpansion(str){

    if (str==null){
        return console.log("empty string");
    }
    let arr = str.split("");
    let newStr="";

    arr = arr.map(item => {
        if(!isNaN(parseInt(item))){
            item = parseInt(item);
            return item;
        } else {
            return item;
        }
    });

    for(let i=0; i<arr.length-1; i++){

        if(!isNaN(parseInt(arr[i])) && isNaN(parseInt(arr[i + 1]))) {

            for(let j=0; j<arr[i]; j++){
                newStr = newStr.concat(arr[i + 1]);
            }

        } else if (isNaN(parseInt(arr[0])) && newStr.length == 0) {
            newStr = newStr.concat(arr[0]);
            
            if (isNaN(parseInt(arr[1]))){
                newStr = newStr.concat(arr[1]);
            }

        } else if (isNaN(parseInt(arr[i])) && isNaN(parseInt(arr[i + 1]))){
            newStr = newStr.concat(arr[i + 1]);
        } 
    }
    console.log(newStr);
}


//6
function largest(int, ...args){
    let large = function(element){
        return element > int;
    }

    if (args.some(large)){
        let max = -Infinity;
        for (let i=0; i<args.length; i++){
            if (args[i]>max){
                max=args[i];
            }
        }
        return max;
    } else {
        return int;
    }
}

function smallest(int, ...args){
    let small = function(element){
        return element < int;
    }

    if (args.some(small)){
        let min = Infinity;
        for (let i=0; i<args.length; i++){
            if (args[i]<min){
                min=args[i];
            }
        }
        return min;
    } else {
        return int;
    }
}

//7
function transform(arr){
    const newArr = [];
    for ( let i = 0; i<arr.length; i++){
        const fun = () => {
            return arr[i];
        }
        newArr.push(fun); 
    }
    return newArr;
}

//8
function sum(){
    const args = Array.from(arguments);
    if (args.length == 0){
        return 0;
    } else {
        let result = args.pop();
        args.forEach(item => {
            sum(item);
            result += item;
        });
        return result;
    }
}

//9 
function countDown(int){
    const counterDown = setInterval( () => {
        if (int > 0){
            console.log(int--);
        } else {
            console.log(0);
            clearInterval(counterDown);
        }   
    }, 1000);
}

//10
Function.prototype.myBind = function(context){
    const fun = this;
    return function() {
        return fun.apply(context, Array.prototype.slice.call(arguments));
    };
};
