// Objects

//  Singelton -- only by constructors -- new Object()

// Object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "swarangi",
  "full name": "Swarangi yadav",
  age: 20,
  location: "london",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  email: "Swarangi@google.com",
  [mySym]: "Key1",
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "swarangi@chatgpt.com";

// Object.freeze(JsUser);

JsUser.email = "Swarangi@microsoft.com";

console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greetingTwo());
