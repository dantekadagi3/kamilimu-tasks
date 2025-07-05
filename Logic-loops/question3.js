//Create a dynamic array that accepts user input until they type "done".

/* 
1.create a variable that accepts user input 
2.Declare the array to hold the names.
3. Use a while loop to keep asking for user input until they type "done".
3.if the user types "done", break out of the loop.
4.else add the input to the array.
5. Finally, display the final array of names.

**/


const input =require('prompt-sync')()
const students = [];

while(true) {
    userInput = input("Enter a value (type 'done' to finish):");
   if (userInput.toLowerCase() === "done") {
        break; 
    }
    students.push(userInput);
}

console.log("Student Roll Call:");
console.log(students);