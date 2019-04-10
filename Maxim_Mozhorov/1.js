function splitAndMerge(str,sp) {
    const splitArray = str.split(" ");
    for(let i=0; i<splitArray.length;i++){
        splitArray[i] = splitArray[i].split('').join(sp);
    }
    return splitArray.join(" "); //в прошлый раз объединял не с помощью пробела, а с поиощью sp, понял что в задании описан пробел
}


splitAndMerge("Hello World!",",");