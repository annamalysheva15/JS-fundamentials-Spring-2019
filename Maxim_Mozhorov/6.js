function smallest() {
    if (arguments.length !=0){
        return Math.min.apply(null,arguments);
    }
    else {
        return false;
    }
}

function largest() {
    if (arguments.length !=0){
        return Math.max.apply(null,arguments);
    }
    else {
        return false;
    }
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));