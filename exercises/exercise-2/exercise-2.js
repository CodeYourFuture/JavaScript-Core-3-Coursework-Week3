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
/*
const [, , { house }] = hogwarts;
console.log(`house ${house}`);
const [ { firstName }] = hogwarts;
console.log(`firstName ${firstName}`);
*/
let [Gryffindor, firstName, lastName, pet ] = hogwarts;
// console.log(`${Gryffindor.firstName} ${Gryffindor.lastName}`);

//  Task1

let obj = hogwarts.filter(hogwartsObjects => hogwartsObjects.house === "Gryffindor").map(objectWithGryffindor => {
  console.log(`Task1: ${objectWithGryffindor.firstName} ${objectWithGryffindor.lastName}`);
});


//  Task2
let obj2 = hogwarts
  .filter(hogwartsObjects => hogwartsObjects.pet !== null && hogwartsObjects.occupation === "Teacher")
  .map(objectWithGryffindor => {
  console.log(`Task2: ${objectWithGryffindor.firstName} ${objectWithGryffindor.lastName}`);
});

/*  
Tried something in the resources.

function findMember(houseName, hogwarts) {
  console.log(`houseName: ${houseName}`)
  for (let [index, house] of hogwarts.entries()) {
    console.log(`house:${house}`);
    console.log(`index:${index}`);
    if (house.house === houseName) {
      console.log(house, index);
      return { house, index };
    }
  }
  // Default values if we can't find our house:
  // return { house: undefined, index: -1 }; 
}

// Output:
findMember("Gryffindor", hogwarts);
*/