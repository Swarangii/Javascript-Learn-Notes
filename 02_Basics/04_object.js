// * Objects Part - 2

// SUMMARY :

// 1.To declare singleton object => new Object( );
// 2. To merge object use spread operartor. {...Obj1, ...Obj2 } or
// Object.assign( { }, obj1,obj2 ):
// 3. To return keys from object => Object.keys(object name);
// 4.To return values from object => Object.values(object name);
// 5.To check property of object => Object.hasOwnProperty(key/value name);

// -----------------------------------------------------------------------

// const appUser = new Object()

const appUser = {};

appUser.id = "123abc";
appUser.name = "Sidd";
appUser.age = 15;
appUser.isLoggedIn = false;

console.log(appUser);

// Nested Objects --

const regularUser = {
  email: "hey@gmail.com",
  fullname: {
    userName: {
      firstName: "Swarangi",
      lastName: "Yadav",
    },
  },
};

console.log(regularUser.fullname.userName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Adding objects --

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// Multiple Objects --

const user = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

console.log(user[1].email);

// Access key , value , entry --

console.log(appUser);

console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty("isLoggedIn"));
