let hogwarts = [
  {
    firstName: 'Harry',
    lastName: 'Potter',
    house: 'Gryffindor',
    pet: 'Owl',
    occupation: 'Student',
  },
  {
    firstName: 'Ron',
    lastName: 'Weasley',
    house: 'Gryffindor',
    pet: 'Scabbers',
    occupation: 'Student',
  },
  {
    firstName: 'Hermione',
    lastName: 'Granger',
    house: 'Gryffindor',
    pet: 'Cat',
    occupation: 'Student',
  },
  {
    firstName: 'Draco',
    lastName: 'Malfoy',
    house: 'Slytherin',
    pet: null,
    occupation: 'Student',
  },
  {
    firstName: 'Cedric',
    lastName: 'Diggory',
    house: 'HufflePuff',
    pet: null,
    occupation: 'Student',
  },
  {
    firstName: 'Severus',
    lastName: 'Snape',
    house: 'Slytherin',
    pet: null,
    occupation: 'Teacher',
  },
  {
    firstName: 'Filius',
    lastName: 'Flitwick',
    house: 'Ravenclaw',
    pet: null,
    occupation: 'Teacher',
  },
  {
    firstName: 'Pomona',
    lastName: 'Sprout',
    house: 'Hufflepuff',
    pet: null,
    occupation: 'Teacher',
  },
  {
    firstName: 'Minerva',
    lastName: 'McGonagall',
    house: 'Gryffindor',
    pet: null,
    occupation: 'Teacher',
  },
  {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    house: 'Gryffindor',
    pet: 'Phoenix',
    occupation: 'Teacher',
  },
];

// TASK 1
function houseDestructuring(peopleArr) {
  peopleArr.forEach((person) => {
    let { house } = person;
    if (house == 'Gryffindor')
      console.log(`${person.firstName} ${person.lastName}`);
  });
}

houseDestructuring(hogwarts);

console.log('<----------------->');

function petDestructuring(peopleArr) {
  peopleArr.forEach((person) => {
    let { pet, occupation } = person;
    if (pet != null && occupation == 'Teacher')
      console.log(`${person.firstName} ${person.lastName}`);
  });
}

petDestructuring(hogwarts);
