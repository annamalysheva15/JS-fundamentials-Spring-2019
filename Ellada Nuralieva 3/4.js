

function reverser(str)
{
	var words=str.split(" ");
    var res="";
    for (var i in words)
    {
        res+=words[i].split("").reverse().join("")+" ";
    }
   
    return res;
	
}




