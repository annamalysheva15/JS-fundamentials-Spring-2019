function largest(){
    let args = Array.from(arguments);
    let max = args[0];
    for(let i=1; i < args.length; i++){
        if(args[i]>max){
            max = args[i];
        }
    }
    return max;
}

function smallest(){
    let args = Array.from(arguments);
    let min =args[0];
    for(let i=0; i < args.length; i++){
        if(args[i]<min){
            min = args[i];
        }
    }
    return min;
}