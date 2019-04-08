//6. Largest and smallest functions


var arr = [7,12,546,0.9,11]
function largest(i,i1) {
    if (i > i1){
        return 1;
    }else if (i < i1){
        return -1;
    }else {
        return 0;
    }
}

function smalest(i,i1) {
    if (i > i1){
        return -1;
    }else if (i < i1){
        return 1;
    }else {
        return 0;
    }
}

console.log([1,2,-1,0.2,10].sort(largest));
console.log([1,2,-1,0.2,10].sort(smalest));

console.log(arr.sort(largest));
console.log(arr.sort(smalest));