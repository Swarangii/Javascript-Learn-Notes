// Numbers and math

// * Numbers

const score = 100;
console.log(score);

const balance = new Number(300);

console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8904;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString("en-IN"));

// new Number= Number for sure => [Number: 300]
// .toString() => convert into string =>300
// .toFixed(2) => 300.00
// .toPrecision(3) = 23.8904 =>23.9
// .toLocaleString() = 1000000=>1,000,000
// .toLocaleString('en-IN') = 1000000=>10,00,000

// * Math
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4, 5, 6, 7));
console.log(Math.max(4, 5, 6, 7));
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min);
