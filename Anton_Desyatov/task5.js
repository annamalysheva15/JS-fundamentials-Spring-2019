function stringExpansion(str){
    let regExp = new RegExp(/\d[A-Z|a-z]/g);
    str = str.replace(regExp,function(p1){
        let tmp = "";
        console.log(p1);
        for(let i =0; i < p1[0]; i++){
            tmp+=p1[1];
        }
        return tmp;
    });
    str = str.replace(/\d/g, "");
    return str;
}