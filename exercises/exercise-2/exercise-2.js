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

// Gryffindor Members
let [harry, hermione, , , , , , minerva, albus] = hogwarts;

console.log("Gryffindor Members:");
console.log(harry.firstName, harry.lastName);
console.log(hermione.firstName, hermione.lastName);
console.log(minerva.firstName, minerva.lastName);
console.log(albus.firstName, albus.lastName);

// Teachers with pets
let [, , , , , , , , teacher] = hogwarts;

console.log("Teachers with pets:");
console.log(teacher.firstName, teacher.lastName);
