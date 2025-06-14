// * This and arrow --

const user = {
  username: "Swarangi",
  price: 99,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website!!`);
    // console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// function one() {
//   let username = "Swara";
//   console.log(this);
// }

// const one = function () {
//   let username = "Swara";
//   console.log(this);
// };

const one = () => {
  let username = "Swara";
  console.log(this.username);
};

// one();

// ? Explicit arrow function---
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// ?Implicit arrow function---
// const addTwo = (num1, num2) => num1 + num2;

// use paranthese carefully--
const addTwo = (num1, num2) => ({ num1: 9 });

console.log(addTwo(9, 6));

const myArray = [2, 3, 4, 5, 6, 7];

// myArray.forEach();
