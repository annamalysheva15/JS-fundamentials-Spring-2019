
function recursSum()
{
	var array=[];
	for(var i in arguments)
	{
		array[i]=arguments[i];
	}
	result=array.shift();
	return result+sum(array);
	
	function sum(array)
	{
		var result=0;
		if(array.length>0)
		{
			result=array.shift()+sum(array);
		}
		return result;
	}

}

		
	



