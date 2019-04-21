Function.prototype.myBind = function (context)
{
  var args = [].slice.call(arguments,1);
  var func=this;
  return function() {
   	var funcArgs = [].slice.call(arguments);
  	return func.apply(context, args.concat(funcArgs));
  }
}