// Scope --
var c = 200;
let a = 500;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a);
// console.log(b);
console.log(c);

// Nested Scope --

function one() {
  const username = "Swarangi";
  function two() {
    const website = "github";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "Swarangi";
  if (username === "Swarangi") {
    const website = " github";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++ interesting ++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// we can't place a function call before function initialized, created through const!!
const addtwo = function (num) {
  return num + 2;
};

addtwo(5);
