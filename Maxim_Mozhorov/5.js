function stringExpansion(str) {
    let res = '';
    let mas_num = [];
    let mas_sym = [];
    for (let i = 0; i < str.length; i++){
        if (!isNaN(str[i]) && isNaN(str[i+1]) && (i+1)<str.length){//if number
            mas_num[i] = parseInt(str[i]);
            for (let j = 0; j<mas_num[i]; j++){
                res += str[i+1];
            }
        }
        else if (isNaN(str[i]) && isNaN(str[i+1]) && (i+1)<str.length){
            res += str[i];
        }
        else if(isNaN(str[i]) && isNaN(str[i-1])){
            res += str[i];
        }
    }
    return res;
}

stringExpansion('3D2a5d2f');
stringExpansion('3d332f2a');
stringExpansion('abcde');
stringExpansion('ZS3f5g');
stringExpansion('v4eB');
