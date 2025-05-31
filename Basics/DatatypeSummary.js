// #Primitive Datatype

// 7 Types: string, number, boolean, null, undefined, Symbol, bigInt

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherID = Symbol("123");
console.log(id === anotherID);

const bigNumber = 123456789n;
console.log(typeof bigNumber);

// Referensive (non-Primitive) datatype

// array, object, functions

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ***************************************

// Stack and Heap Memory
// Stack => Primitive Datatype
// Heap => Non-Primitive Datatype

let myId = "Swarangi.com";
let anotherName = myId;
console.log(anotherName);

anotherName = "fluxuraa";

console.log(myId);
console.log(anotherName);

let user1 = {
  email: "abc@gmail.com",
  upi: "1234",
};

let user2 = user1;

user2.email = "aaa@gmail.com";

console.log(user1);
console.log(user2);
