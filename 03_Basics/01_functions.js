// * Functions --

function myname() {
  console.log("S");
  console.log("W");
  console.log("A");
  console.log("R");
  console.log("A");
  console.log("N");
  console.log("G");
  console.log("I  ");
}
myname();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNumbers(2, 5);

// console.log("Result: ", result);

// function loginUserMessage(username) {
//   if (username == undefined) {
//     console.log("Please enter a username!!");
//     return;
//   }
//   return `${username} just logged in`;
// }

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username!!");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Swarangi"));
console.log(loginUserMessage());

// Suppose we don't know number of parameters

// function calculateCartPrice(val1,val2...num1) {
//   return num1;
// }

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(100, 244, 564, 900));

// Accessing object through function --
const user = {
  name: "Swarangi",
  age: 20,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.name} and age is ${anyObject.age}.`);
}

// handleObject(user);

handleObject({
  name: "Sam",
  age: 9,
});

// acess array through function --
const myNewArray = [200, 700, 300, 540];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));
