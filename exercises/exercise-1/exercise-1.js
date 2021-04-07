const personOne = {
  firstName: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
let { firstName, age, favouriteFood } = personOne;
function introduceYourself(personOne) {
  console.log(
    `Hello, my name is ${firstName}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
