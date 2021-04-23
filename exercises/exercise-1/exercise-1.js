// const personOne = {
//   name: "Popeye",
//   age: 34,
//   favouriteFood: "Spinach",
// };

// function introduceYourself({name,age,favouriteFood}) {
//   console.log(
//     `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
//   );
// }

// introduceYourself(personOne);
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2() {
  this.x = this.x + 1;
  //return val;
}

f2(y);
console.log(y);
