
//8. Recursion function 2 var.


// function sum() {
//     var totalSum = 0;
//     for (var i = 0; i < arguments.length; i++){
//         totalSum += arguments[i];
//     }
//     return totalSum;
// }
// console.log(sum(1,3,5,7));



    function sum(...numbers) {
        return numbers.length !== 1
            ? numbers[0] + sum(...numbers.slice(1))
            : numbers[0];
    };

console.log(sum(1,3,5,7));


