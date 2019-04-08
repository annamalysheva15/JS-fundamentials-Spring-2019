//4. Reverses Function

function reverse(str) {
    var newArray = str.split(" ");
    console.log(newArray);
    for(var i =0; i < newArray.length;i++){
        var revStr = "";
        for(var j = newArray[i].length-1; j >= 0; j--){
            revStr += newArray[i][j];
        }
        newArray[i] = revStr;
    }
    newArray = newArray.join(' ');
    return newArray;
};
console.log(reverse("A fun little challenge!"));