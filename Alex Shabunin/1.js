//1. Write a function splitAndMerge Function

    function splitAndMerge(str,sp){
        var arrayOfStrings = str.split(" ");

        for(var i = 0; i < arrayOfStrings.length;i++){
            arrayOfStrings[i] = arrayOfStrings[i].split("").join(sp);

        }
        var finalStr = arrayOfStrings.join(" ");

        return (console.log(finalStr));
    };

splitAndMerge("Hello World",",");



