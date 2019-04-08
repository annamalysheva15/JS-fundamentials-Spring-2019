//5. stringExpansion - функция

function stringExpansion(str) {
    var newArr = str.split("");

    var resultArray = [];
    for(var i =0; i < newArr.length;i++){

       var timeVal = Number(newArr[i]);
       if( isNaN(timeVal)){

       }else{
           newArr[i] = timeVal;
       }

    }

    for(var i =0; i < newArr.length; i++){
        if(typeof newArr[i] == "string" && typeof newArr[i-1] == 'number'){
            for(var j = 0; j < newArr[i-1];j++){
                resultArray.push(newArr[i]);
            }
        }else{
            resultArray.push(newArr[i]);
        }

        }
        var resultString ="";
    for(var k = 0; k < resultArray.length;k++){
        if(typeof resultArray[k] == 'string'){
            resultString += resultArray[k];
        }
    }

    console.log(resultString);
}

stringExpansion("3D2a5d2f");