function reverseWords(str){
    str = str.split(" ").map(currElem => {
        return currElem.split("").reverse().join("");
    });
    str = str.join(" ");
    return str;
}