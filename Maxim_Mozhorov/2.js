function convert(str) {
    let res = '[';
    let counter = 0;
    let i = 0;
    for (let key in str) {
        counter++;
    }

    for (let key in str) {
         res += '[' + '"' + key.toString() + '", ' + '"' + str[key].toString() + '"'+']';
         i++;
         if (counter!=i){
             res += ', '
         }
    }

    res += ']';
    return res;
}

let a = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
console.log(convert(a));