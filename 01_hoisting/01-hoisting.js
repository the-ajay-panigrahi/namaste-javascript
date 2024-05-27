var x = 23;
function getName(firstName) {
  console.log(`My name is ${firstName}`);
}
getName("Ajay");
console.log(`The value of x is : ${x}`);

// Hoisting

// getName("Sanjay");
// console.log(`The value of x is : ${x}`);
// var x = 23;
// function getName(firstName) {
//   console.log(`My name is ${firstName}`);
// }

// getName("Sanjay");
// console.log(`The value of x is : ${x}`);
// function getName(firstName) {
//   console.log(`My name is ${firstName}`);
// }

// myFunc("Sanjay");
// console.log(`The value of x is : ${x}`);
// var x = 23;
// var myFunc = function getName(firstName) {
//   console.log(`My name is ${firstName}`);
// };

// myFunc("Sanjay");
// console.log(`The value of x is : ${x}`);
// var x = 23;
// var myFunc = function (firstName) {
//   console.log(`My name is ${firstName}`);
// };

myFunc("Ajay");
console.log(`The value of x is : ${x}`);
var x = 23;
var myFunc = (firstName) => {
  console.log(`My name is ${firstName}`);
};
