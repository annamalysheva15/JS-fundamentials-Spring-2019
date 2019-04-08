function sum(){
    let args = Array.from(arguments);
    let result = sumRec(0, args);
    return result;

    function sumRec(value, numbers){
        if(numbers.length === 0){
            return value;
        }
        value+=numbers[0];
        return sumRec(value, numbers.slice(1));
    }
}

