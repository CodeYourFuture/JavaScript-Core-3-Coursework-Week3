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

// task one
var [first,second, third, , , , , ,lasttwo,last] = hogwarts;
function gryffindor(object){
    if(object.pet != null && object.occupation == "Teacher"){
        console.log("-------------------")
        console.log("Task 2")
        console.log(`${object.firstName} ${object.lastName}`);
    }else{
        console.log(`${object.firstName} ${object.lastName}`);
    }
}
console.log("Task 1")
gryffindor(first);
gryffindor(second);
gryffindor(third);
gryffindor(lasttwo);
gryffindor(last);