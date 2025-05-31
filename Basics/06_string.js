const name = "Swarangi";
const repoCount = 500;
console.log(`Hello ${name} and repo with ${repoCount}`);

const gameName = new String("Swarangi^Yadav^25^5^09");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(8));

console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 7);
console.log(newString);

const anotherName = gameName.slice(-4, 8);
console.log(anotherName);

const fullName = "    swara     ";
console.log(fullName.trim());

console.log(gameName.includes("09"));

console.log(gameName.replace("^", "%"));

console.log(gameName.split("^"));

// new String => object with key value pair
// [] => index
// .__proto__ => {}
// .length => length of string
// .toUpperCase => use for uppercasing the string
// .charAt() => character at specific index
// .indexOf() => Index of specific character
// .substring() => create another string from specific start index to end index , it doesnt follow negative index
// .slice() => slice string from specific start point to end point , follows negative index
// .trim() => remove whitspace
// .replace() => replace a specific character to another specified character at first occurence
// .includes() => check the specific string is present in variable , true and false return accordingly
// .split() => splits the string by specific seperator and to given limit , split(seperator , limit)
