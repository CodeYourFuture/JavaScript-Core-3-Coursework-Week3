let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
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

let one = hogwarts[0];
let two = hogwarts[1];
let three = hogwarts[2];
let four = hogwarts[3];
let five = hogwarts[4];
let six = hogwarts[5];
let seven = hogwarts[6];
let eight = hogwarts[7];
let nine = hogwarts[8];

// console.log(one.firstName,one.lastName)
// console.log(two.firstName,two.lastName);
// console.log(three.firstName, three.lastName);
// console.log(four.firstName, four.lastName);
// console.log(five.firstName, five.lastName);
// console.log(six.firstName, six.lastName);
// console.log(seven.firstName, seven.lastName);
// console.log(eight.firstName, eight.lastName);
// console.log(nine.firstName, nine.lastName);

const { firstName, lastName, house, pet, occupation } = hogwarts;

let [one1, two1, three1, four1, five1, six1, seven1, eight1, nine1] = hogwarts;
const numbers = [one1, two1, three1, four1, five1, six1, seven1, eight1, nine1];

console.log(
  "======================== HOUSE GRYFFINDOR ======================="
);

function nameOfHouse({ firstName, lastName, house }) {
  if (house === "Gryffindor") {
    console.log(`${firstName} ${lastName} belongs to the house of Gryffindor`);
  }
}

hogwarts.forEach((person) => {
  nameOfHouse(person);
});

console.log("======================== Has a pet =======================");

function hasPet({ firstName, lastName, pet, occupation }) {
  if (pet !== null && occupation == "Teacher") {
    console.log(`${firstName} ${lastName} has a ${pet} and is a teacher`);
  }
}

hogwarts.forEach((person) => {
  hasPet(person);
});

