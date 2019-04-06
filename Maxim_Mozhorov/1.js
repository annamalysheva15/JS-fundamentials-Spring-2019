
function splitAndMerge(str,sp) {
    const splitArray = str.split(sp);
    let resArray='';
    for(let i=0; i<splitArray.length;i++){
        resArray += splitArray[i].split('').join(sp);
    }


    return resArray;
}
const str = "Hello, World!";
const sp = 'o';
console.log(splitAndMerge("Hello World!",","));