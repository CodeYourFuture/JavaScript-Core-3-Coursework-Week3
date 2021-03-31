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

/*
## Task 1
- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
- Use array destructuring to extract the values you need out of the array.
*/
let [{firstName, lastName, house}] = hogwarts;

function peopleOfGryffindorHouse(hogwarts) {
     hogwarts.map(person=> {
         if (person.house === "Gryffindor") {
             console.log(`${person.firstName} ${person.lastName}`)
         };
     })
 }

peopleOfGryffindorHouse(hogwarts)


/*
## Task 2
- In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
- Use array destructuring to extract the values you need out of the array.
*/

 let [{firstName, lastName, house, pet, occupation}] = hogwarts

 function teachersOwnedPet(hogwarts){
      hogwarts.map(person=> {
        if (person.pet != null & person.occupation === "Teacher") {
            console.log(`${person.firstName} ${person.lastName}`)
        };
    })
}


teachersOwnedPet(hogwarts)

