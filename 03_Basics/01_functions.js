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
