// 10. Task 10

Function.prototype.myBind = function(context) {
  return (...args) => {
    return this.apply(context, args);
  }
}
