//3. Complete the method/function

function toCamelCase(str){
    for( var i =0; i < str.length;i++){

        if(str[i] == '_'){
            str = str.toLowerCase().split('_');

            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
        }else if(str[i] == '-'){
            str = str.toLowerCase().split('-');

            for (var i = 0; i < str.length; i++) {
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
        }
    }

    return str.join('');
}
console.log(toCamelCase("lord-of-Hell"));