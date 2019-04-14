function toCamelCase(str){
    let regExp = new RegExp(/-|_/g);
    let result = "";
    str = str.replace(regExp," ");
    str = str.split(" ");
    result += str[0];
    str.slice(1).map(function(currElem)
        {
            result += currElem.charAt(0).toUpperCase() + currElem.substr(1);
        });
    return result;
}