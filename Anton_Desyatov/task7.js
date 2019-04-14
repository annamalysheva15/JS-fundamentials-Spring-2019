function transform(baseArray){
    const arrayOfFunctions = [];
    for(let i = 0; i < baseArray.length; i++){
        arrayOfFunctions.push(function(){
            return baseArray[i]
        })
    }
    return arrayOfFunctions;
}