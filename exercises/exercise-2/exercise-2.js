let hogwarts = [
    { firstName: "Harry", lastName: "Potter", house: "Gryffindor", pet: "Owl", occupation: "Student" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor", pet: "Scabbers", occupation: "Student" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor", pet: "Cat", occupation: "Student" },
    { firstName: "Draco", lastName: "Malfoy", house: "Slytherin", pet: null, occupation: "Student" },
    { firstName: "Cedric", lastName: "Diggory", house: "HufflePuff", pet: null, occupation: "Student" },
    { firstName: "Severus", lastName: "Snape", house: "Slytherin", pet: null, occupation: "Teacher" },
    { firstName: "Filius", lastName: "Flitwick", house: "Ravenclaw", pet: null, occupation: "Teacher" },
    { firstName: "Pomona", lastName: "Sprout", house: "Hufflepuff", pet: null, occupation: "Teacher" },
    { firstName: "Minerva", lastName: "McGonagall", house: "Gryffindor", pet: null, occupation: "Teacher" },
    { firstName: "Albus", lastName: "Dumbledore", house: "Gryffindor", pet: "Phoenix", occupation: "Teacher" }
]

//* Task - 1
function peopleOfGryffindor(hogwarts) {
    let count = 1;
    console.log("Names of the people who belong to the Gryffindor house:")
    hogwarts.forEach(item => {
        let { firstName, lastName, house } = item;
        if (house === "Gryffindor") {
            console.log(`${count}: ${firstName} ${lastName}`);
            count++;
        }
    })
}

peopleOfGryffindor(hogwarts);

console.log("------------------")

//* Task - 2
function teachersHavePets(hogwarts) {
    let count = 1;
    console.log("Names of teachers who have pets:")
    hogwarts.forEach(item => {
        let { firstName, lastName, pet, occupation } = item;
        if (occupation === "Teacher" && pet !== null) {
            console.log(`${count}: ${firstName} ${lastName}`);
            count++;
        }
    })
}

teachersHavePets(hogwarts);
