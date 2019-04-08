function transform(arr) {
    let res =[];
    for (let i = 0; i < arr.length; i++) {

        let mynum = (function(i) {
            return function() {
                return i;
            };

        })(arr[i]);

        res.push(mynum);
    }

    return res;
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
newArray[3](); //должно вывести 40


