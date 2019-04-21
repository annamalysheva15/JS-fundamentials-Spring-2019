

function splitAndMerge(str, sp)
{
	var words=str.split(" ");
    var res="";
    for (var i in words)
    {
        res+=(words[i].split("").join(sp)) +sp;
    }
    res=res.slice(0,(res.length-1));
    return res;
	
}




