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
];

//for(let i = 0; i < hogwarts.length; i++) {
    //if(hogwarts[i].house === "Gryffindor") {
    //console.log(hogwarts[i].firstName + " " + hogwarts[i].lastName);
//}
//}

for(let i = 0; i < hogwarts.length; i++) {
    
    if(hogwarts[i].house === "Gryffindor") {
        let firstName = hogwarts[i].firstName;
        let lastName = hogwarts[i].lastName;
        
        console.log(`${firstName} ${lastName}`);
    }

}
