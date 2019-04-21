function largest()
{
	var result=[];
	for (var i=0;i<arguments.length;i++)
	{
		result[i]=arguments[i];
	}
	result.sort();
	return result[result.length-1];
}
function smallest()
{
	var result=[];
	for (var i=0;i<arguments.length;i++)
	{
		result[i]=arguments[i];
	}
	result.sort();
	return result[0];
}