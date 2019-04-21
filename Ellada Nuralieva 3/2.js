function convert(hash)
{
    var temp=[];
    var res=[];
    for(var key in hash)
    {
        res.push([key,hash[key]]);
    }
    return res;
}

