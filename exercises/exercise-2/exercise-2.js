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


// Exercise 1
console.log("--Exercise 1--")

let peopleBelongToGryffindorHouse = hogwarts
  .filter(({ house }) => {
    return house.includes("Gryffindor");
  })
  .forEach(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });


//exercise 2
console.log("\n--Exercise 2--")

let teachersWithPet = hogwarts
  .filter(({ pet, occupation }) => {
    return pet && occupation.includes("Teacher");
  })
  .forEach(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });
   
























//let [harry, hermione, draco, cedric, severus, filius, pomona, minerva, albus] = hogwarts;
//let {firstName, lastName, house} = hogwarts;
//let {1: harry, 2: hermione} = hogwarts;



// function teachersWithPet({firstName, lastName, pet, occupation} = hogwarts){
    
//     if(pet !== "null" && occupation === "teacher"){
//         return firstName, lastName;
// }};

//     console.log(teachersWithPet());

