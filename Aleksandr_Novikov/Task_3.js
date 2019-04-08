function toCamelCase(str) {
	return str.replace(/[-|_](\w)/g, replacer);
}
function replacer(match, p1) {
	return p1.toUpperCase();
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_stealth-Warrior"));
console.log(toCamelCase("the_stealth-Warrior_casts-Envenom"));