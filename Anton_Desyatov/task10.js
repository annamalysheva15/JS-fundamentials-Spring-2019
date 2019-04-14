Function.prototype.myBind = function(context){
    let func = this;
    return function() {
        return func.apply(context,[].slice.call(arguments));
    };
};
