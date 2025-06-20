// for loop --

// 1. for - of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greeting = "Hello javascript";

for (const greet of greeting) {
  console.log(`Each Char is: ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":- ", value);
}

// 2. for-in loop

const myobj = {
  game1: "NFS",
  game2: "pool",
};

for (const key in myobj) {
  console.log(`${key} -> ${myobj[key]}`);
}

// for-in in array

const myarr = ["js", "py", "cpp"];

for (const key in myarr) {
  console.log(key, " -> ", myarr[key]);
}
