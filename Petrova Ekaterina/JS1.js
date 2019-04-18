//2

function convert(hash) {
var hashVal=Object.values(hash);
var hashKeys=Object.keys(hash);
var arr=[];
	hashKeys.map(function(hashKey, i) {
	arr.push([hashKey, hashVal[i]])
		});
return arr;
}

