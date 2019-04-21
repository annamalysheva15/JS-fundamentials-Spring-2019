function toCamelCase(str)
{
    function replacer(res)
	{
		return res.toUpperCase().replace(/[_-]/,"");
	}

    var reg=/[-_][a-z]/gi;
    return str.replace(reg,replacer);
    
}


