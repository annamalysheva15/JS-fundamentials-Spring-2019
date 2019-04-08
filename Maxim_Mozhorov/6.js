function smallest() {
    return Math.min.apply(null,arguments);
}

function largest() {
    return Math.max.apply(null,arguments);
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));