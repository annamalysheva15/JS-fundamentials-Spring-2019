function sum(...args) {
    if (args.length> 1) {
        return args[0] + sum(...args.slice(1));
    }
    else {
        return args[0];
    }
}

sum(6,12,9,4);