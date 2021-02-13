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

//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     house: "Gryffindor",
//     pet: "Owl",
//     occupation: "Student",
//   },

// ## Task 1

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
// - Use array destructuring to extract the values you need out of the array.

// console.log("Patryk");

const gryffindorTeamFinder = function (arr) {
  const arrToDisplay = arr.filter(function ({
    firstName,
    lastName,
    house,
    pet,
    occupation,
  }) {
    if (house === "Gryffindor") return true;
    else return;
  });
  return arrToDisplay;
};

const gryffindorTeam = gryffindorTeamFinder(hogwarts);

gryffindorTeam.forEach(function ({
  firstName,
  lastName,
  house,
  pet,
  occupation,
}) {
  console.log(
    `First name: ${firstName}; Last Name: ${lastName}; House: ${house}; Pet: ${
      pet ? pet : "Nothing"
    }; Occupation ${occupation}`
  );
});

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
// - Use array destructuring to extract the values you need out of the array.

const doublePerFinder = function (arr) {
  const arrToDisplay = arr.filter(function ({
    firstName,
    lastName,
    house,
    pet,
    occupation,
  }) {
    if (house === "Gryffindor") return true;
    else return false;
  });
  return arrToDisplay;
};

// const gryffindorTeam = gryffindorTeamFinder(hogwarts);

gryffindorTeam.forEach(function ({
  firstName,
  lastName,
  house,
  pet,
  occupation,
}) {
  console.log(
    `First name: ${firstName}; Last Name: ${lastName}; House: ${house}; Pet: ${
      pet ? pet : "Nothing"
    }; Occupation ${occupation}`
  );
});
