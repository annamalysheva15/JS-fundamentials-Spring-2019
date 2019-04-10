function convert(str){
    let res = [];
    for (let key in str) {
        res.push([key,str[key]]);
    }
    return res;

}


let a = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
console.log(convert(a));