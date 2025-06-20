// For-each loop

const coding = ["js", "cpp", "py", "rb"];

// Method-1
console.log("Method-1");
coding.forEach(function (val) {
  console.log(val);
});

// Method-2
console.log("Method-2");
coding.forEach((item) => {
  console.log(item);
});

// Method-3
console.log("Method-3");
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

// Method-4
console.log("Method-4");
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    langName: "Javascript",
    langFile: "js",
  },
  {
    langName: "Java",
    langFile: "java",
  },
  {
    langName: "python",
    langFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.langName);
});
