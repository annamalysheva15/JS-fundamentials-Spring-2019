Function.prototype.myBind = function (context, ...args) {
    let newcontext = this; //объявляем новую переменную для передачи туда контекста вызванной функции
    return function (...nextArgs) {
        const params = args.concat(nextArgs);
        return newcontext.apply(context,params);
    };
};


function addPropToNumber(number) { return this.prop + number; }

function testFuncDivision(lastname) { return "Your name is: " + this.name + " " + lastname; }



let bound = addPropToNumber.myBind({ prop: 9 });
let test = testFuncDivision.myBind({name: "Max"});
console.log(bound(1));
console.log(test('Mozhorov'));
