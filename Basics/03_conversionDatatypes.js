// ? Conversion of data Types ---->

let score = "Swarangi";
let NumScore = Number(score);
console.log(NumScore);
console.log(typeof NumScore);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// "Swara"=>NaN

let isBool = "Swara";
let convIsBool = Boolean(isBool);
console.log(convIsBool);

//1 => true ; 0 => false
//"" => false
//"Swara" => true

let someNum = 24;
let strNum = String(someNum);

console.log(strNum);
console.log(typeof strNum);

// *************** Operators ******************

// console.log(2 + 2);
// console.log(2 - 9);
// console.log(2 * 5);
// console.log(2 ** 5);
// console.log(2 / 5);
// console.log(2 % 6);

// let str1 = "Hello ";
// let str2 = "Swarangi";
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");
// console.log(true+) -- error

let gameCounter = 100;
// ++gameCounter;
// ^ prefixer

// gameCounter++;
// ^Postfixer
console.log(gameCounter);
