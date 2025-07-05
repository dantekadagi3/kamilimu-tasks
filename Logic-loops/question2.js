//Add support for middle names or multiple parts.
//To add support for middle names or multiple parts I can edit my previous `isEligible` function  as follows:
//Note: I am using method chaining
//a)use the trim() method to remove any leading or trailing whitespace from the student's name.
//b)use the split() method to split the name into parts based on spaces.
//c)since the name can have multiple parts, I will check if the first part starts with "A" and the last part ends with "e". using array indexing.where 0 will be the first and array.length - 1 will be the last part of the name.
//i also  realised i need a new variable to hold the parts of the name after splitting it.


const students = ["Alice Ate", "Bob", "Charlie"];
console.log("Student Roll Call:");
 
function isEligible(student) {
    const parts = student.trim().split(" ");
    return parts[0].startsWith("A") && parts[parts.length - 1].endsWith("e");
}

for (const student of students){
    if (isEligible(student)) {
        console.log(`- Welcome, ${student}!`);
    }
}
