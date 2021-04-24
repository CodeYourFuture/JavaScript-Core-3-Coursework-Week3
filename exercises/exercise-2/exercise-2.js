let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// const [, , { house }] = hogwarts;
// console.log(`house:\t${house}`);
// const [ { firstName }] = hogwarts;
// console.log(`firstName:\t${firstName}`);

//  Task1 Ddestructuring in action!
hogwarts
  .filter(({ house }) => house === "Gryffindor")  //  Checking for all houses with value Gryffindor.
  .forEach(({ firstName, lastName }) => console.log(`Task1:\t${firstName}${lastName}`));  //  log those houses first and last name.
  
// Task1  No Destructuring used here!  
// hogwarts
//   .filter(hogwartsObjects => hogwartsObjects.house === "Gryffindor")
//   .forEach(objectWithGryffindor => {
//     console.log(`Task1: ${objectWithGryffindor.firstName} ${objectWithGryffindor.lastName}`);
//   });

//  Task 2  Destructuring in action!
hogwarts
.filter(({ occupation, pet }) => occupation === "Teacher" && pet )
.forEach(({ firstName, lastName }) => console.log(`Task2: \t${firstName} ${lastName}`));

//  Task2  No destructuring used here!
// hogwarts
//   .filter(hogwartsObjects => hogwartsObjects.pet !== null && hogwartsObjects.occupation === "Teacher")
//   .map(objectWithGryffindor => {
//   console.log(`Task2: ${objectWithGryffindor.firstName} ${objectWithGryffindor.lastName}`);
//   });