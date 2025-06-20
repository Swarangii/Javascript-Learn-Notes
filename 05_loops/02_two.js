// While loop -->

// syntax --
// while(condition){
//    statement
// }

let index = 0;
while (index <= 10) {
  console.log(`Index of ${index}`);
  index = index + 2;
}

// while loop with array--

let myarr = ["blue", "yellow", "red"];

let arr = 0;
while (arr < myarr.length) {
  console.log(`The list of colors in my Array: ${myarr[arr]}`);
  arr++;
}

// do-while loop

let score = 11;

do {
  console.log(`The score is: ${score}`);
  score++;
} while (score <= 10);
