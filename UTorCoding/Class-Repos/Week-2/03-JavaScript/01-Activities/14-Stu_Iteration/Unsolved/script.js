//WRITE YOUR CODE BELOW
let students = ["John", "Paul", "George", "Ringo", "Yoko"];
console.log(students.length);
/*
for (let i= 0; i < students.length; i++) {
    console.log("Great to see you, " + students[i] + "!");
}
*/
let i = 0;
while (i < students.length) {
    console.log("Great to see you, " + students[i] + "!");
    i++;
}
