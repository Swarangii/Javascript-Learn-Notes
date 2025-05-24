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
