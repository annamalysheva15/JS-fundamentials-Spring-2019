function splitAndMerge(str, str_sp){
    let words = str.split(" ");
    let smh = "";
    for(let i =0; i< words.length; i++){
        smh+=(words[i].split("").join(str_sp)) + " ";
    }
    return smh;
}