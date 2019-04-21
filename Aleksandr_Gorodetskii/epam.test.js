
const { splitAndMerge, objectToArray, someObject, toCamelCase} = require ('./epam');
// --1--
test('splitAndMerge() exists', () => {
	expect(splitAndMerge).toBeDefined();
})

test('splitAndMerge() returns "M y n a m e i s J o h n"', () => {
	expect(splitAndMerge("My name is John", " ")).toBe("M y n a m e i s J o h n");
})

test('splitAndMerge() returns "H,e,l,l,o W,o,r,l,d,!"', () => {
	expect(splitAndMerge("Hello World!",",")).toBe("H,e,l,l,o W,o,r,l,d,!");
})

test('splitAndMerge() returns string ', () => {
	expect(typeof splitAndMerge("My name is John", " ")).toBe('string');
})

// --2--

test('objectToArray() exists', () => {
	expect(objectToArray).toBeDefined();
})

test('objectToArray() returns [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]', () => {
	expect(objectToArray(someObject)).toEqual([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]);
})

test('objectToArray() returns array ', () => {
	expect(Array.isArray(objectToArray(someObject))).toBeTruthy();
})

// --3--

test('toCamelCase() exists', () => {
	expect(toCamelCase).toBeDefined();
})

test('toCamelCase() returns "theStealthWarrior"', () => {
	expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
})

test('toCamelCase() returns "TheStealthWarrior"', () => {
	expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
})

test('objectToArray() returns string ', () => {
	expect(typeof toCamelCase("The_Stealth_Warrior")).toBe("string")
})