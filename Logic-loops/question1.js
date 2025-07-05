// const students1 = ["Alice Ate", "Bob", "Charlie"];
// console.log("Student Roll Call:");

// for (const student of students) {
//   if (student.startsWith("A") && student.endsWith("e")) {
//     console.log(`- Welcome, ${student}!`);
//   }
// }

//1.Extract the conditional logic into a function.
//To extract the conditional logic into a function, I can create a function named `isEligible` that checks if a student's name starts with "A" and ends with "e".
 //Then I can use this function in my loop.
//Converted all the names to lowercase to make the check case-insensitive.


const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");
 
function isEligible(student) {
  return student.toLowerCase().startsWith("a") && student.toLowerCase().endsWith("e");
}

for (const student of students){
    if (isEligible(student)) {
        console.log(`- Welcome, ${student}!`);
    }
}


