let hogwarts = [
    { firstName: "Harry", lastName: "Potter", house: "Gryffindor", pet: "Owl", occupation: "Student" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor", pet: "Cat", occupation: "Student" },
    { firstName: "Draco", lastName: "Malfoy", house: "Slytherin", pet: null, occupation: "Student" },
    { firstName: "Cedric", lastName: "Diggory", house: "HufflePuff", pet: null, occupation: "Student" },
    { firstName: "Severus", lastName: "Snape", house: "Slytherin", pet: null, occupation: "Teacher" },
    { firstName: "Filius", lastName: "Flitwick", house: "Ravenclaw", pet: null, occupation: "Teacher" },
    { firstName: "Pomona", lastName: "Sprout", house: "Hufflepuff", pet: null, occupation: "Teacher" },
    { firstName: "Minerva", lastName: "McGonagall", house: "Gryffindor", pet: null, occupation: "Teacher" },
    { firstName: "Albus", lastName: "Dumbledore", house: "Gryffindor", pet: "Phoenix", occupation: "Teacher" }
]

const { firstName, lastName, house, pet, occupation } = hogwarts;

console.log(`\n******* Names of the people who belong to the Gryffindor house ******`)
function isGryffindor(obj){
    obj.forEach((name) => {
      if (name.house === "Gryffindor") {
        console.log(name.firstName, name.lastName);
      }
    });
}

isGryffindor(hogwarts);

console.log(`\n******* Name(s) of teachers who have pets. ******`)
function teachersWithPets(obj) {
  obj.forEach((name) => {
    if (name.occupation === "Teacher" && name.pet !== null) {
      console.log(name.firstName, name.lastName);
    }
  });
}

teachersWithPets(hogwarts);
