function transform(baseArray)
{
	var funcArray=[];
	return funcArray=baseArray.map( function(current, index, array){
		 return function() {return current;};


	})
	
	
}