function smallest() {
    let min = 65536;
    for (var i = 0; i < arguments.length; i++) {
        if(min>arguments[i]){
            min = arguments[i];
        }
    }
    return min;
}

function largest() {
    let max = -65536;
    for (var i = 0; i < arguments.length; i++) {
        if(max<arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));