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
//task1

//hogwarts.forEach(peopleHouse =>{
  /*if(peopleHouse.house ==='Gryffindor'){
  //   console.log(`${peopleHouse.firstName}  ${peopleHouse.lastName}`)
  }*/
  //by using array destructuring it would look like this
//   if(peopleHouse.house==='Gryffindor'){
//     let {firstName,lastName}=hogwarts;
//     console.log(`${peopleHouse.firstName}  ${peopleHouse.lastName}`)
//   }
// })

//task2
for (let eachPerson in hogwarts){
  if(hogwarts[eachPerson].pet&&hogwarts[eachPerson].occupation=='Teacher'){
    let {occupation,firstName,lastName}=hogwarts[eachPerson];
    console.log(`${hogwarts[eachPerson].firstName} ${hogwarts[eachPerson].lastName}`)
  }
}
