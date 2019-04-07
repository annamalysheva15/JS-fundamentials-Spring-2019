function toCamelCase(str) {
    let buffer_str = str.replace(/\_/g,'-');
    buffer_str = buffer_str.split('-');
    for(let i = 0; i < buffer_str.length;i++){
        buffer_str[i] = buffer_str[i][0].toUpperCase() + buffer_str[i].slice(1);
    }
    buffer_str = buffer_str.join('');
    return buffer_str;
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");
