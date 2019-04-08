//2. Write a function convert Convert

var array=[];
function convert(obj){
    for( var key in obj){
        var arrayItem=[];
        arrayItem.push(key);
        arrayItem.push(obj[key]);
        array.push(arrayItem);
    }
    return array;
}

console.log(convert({name:"Alex", age:24, role:"Engineer"}));
