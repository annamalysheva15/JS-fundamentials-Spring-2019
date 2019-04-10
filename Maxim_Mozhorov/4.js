function ReverseEachWord(str) {
    let str2 = str.split(' ');
    for (let i =0 ;i<str2.length; i++){
        str2[i] = str2[i].split("").reverse().join("");
    }
    const str3 = str2.join(" ");
    return str3;
}

console.log(ReverseEachWord(' A fun little challenge!'));