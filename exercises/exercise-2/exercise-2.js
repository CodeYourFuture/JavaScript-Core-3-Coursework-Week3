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
//   console.log(harry, hermione, draco, cedric)
//   console.log(harry.pet);

  hogwarts.forEach(function(hogwart){
      let {firstName, lastName,house, ...rest} = hogwart;
      if (house === "Gryffindor") {
           console.log(`${firstName} ${lastName} ${rest.pet}`)
              
  })
  
console.log("--------------------------------------")
   // let [harry, hermione, draco, cedric,severus, filius, pomona, minerva, albus] = hogwarts;
   // console.log(`${harry.firstName} ${harry.lastName}`)


hogwarts.forEach(function (hogwart) {
  let { firstName, lastName,occupation, pet} = hogwart;
  if (occupation === "Teacher" && pet !==null) {
    console.log(`${firstName} ${lastName} ${pet}`);
  }
});
