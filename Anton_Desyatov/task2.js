function hash(obj){
    let result = [];
    let arrayOfNames = Object.getOwnPropertyNames(obj);
    for(let i =0; i < arrayOfNames.length; i++){
        result.push([arrayOfNames[i], obj[arrayOfNames[i]]]);
    }
    return result;
}