function stringExpansion(str)
{
    function replacer(res, p1,p2)
	{
		return res.replace(/[\d]/g,"").repeat(p1);
	}

    var reg=/([\d])([\D])/gi;
    return str.replace(reg,replacer).replace(/[\d]/g,"");
    
}


