function splitAndMerge(str, sp) {
    let words = str.split(" ");
    let letters = "";
    for (let i = 0; i < words.length; i++) {
      letters += (words[i].split("").join(sp)) + " ";
    }
    return letter;
}