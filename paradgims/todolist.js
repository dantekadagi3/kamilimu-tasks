/**
 * Name:Dante Kadagi
 * Date: 2025/07/05
 */

//The to do list app will be built here
/**For creating the to do list app using OOP principles, I will follow these steps:
 * * 1. Create a class called TodoList that will hold the list of tasks.
 * *2.create a method called addTask that will take a task as an argument and add it to the list of tasks IFF the task is not already in the list(I will use the includes method to check this).
 * *3. Create a method called removeTask that will take a task as an argument and remove it from the list of tasks IFF the task is in the list(I will use the indexOf method to check this).
 * *4Create a method called markAsComplete to mark task as complete.Here  I will use the indexOf method to check if the task is in the list and then update the task to indicate that it is complete by adding the text complete  beside the task
 * *5. Create a method called displayTasks that will display all the tasks in the list using a for each loop.
 */


class TodoList{
    constructor(){
        this.tasks=[]
    }

    addTask(task){
        if(!this.tasks.includes(task)){
            this.tasks.push(task);
            console.log(`Task "${task}" added to the list.`);
        }else{
            console.log(`Task "${task}" is already in the list.`);
        }
    }
    removeTask(task){
        const index = this.tasks.indexOf(task);
        if(index !== -1){
            this.tasks.splice(index, 1);
            console.log(`Task "${task}" removed from the list.`);
        }else{
            console.log(`Task "${task}" not found in the list.`);
        }
    }
    markAsComplete(task){
        
        const index = this.tasks.indexOf(task);
        if(index !== -1 ){
            this.tasks[index] = `${task} - completed`;
            console.log(`Task "${task}" marked as complete.`);
        }else{
            console.log(`Task "${task}" not found in the list.`);
        }
    }
    displayTasks(){
        if(this.tasks.length==0){
            console.log("No tasks in the list.");
        }else{
            console.log("Tasks in the list:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }

}

//Testing the Todolist class
const myTodoList = new TodoList();
myTodoList.addTask("Buy groceries");
myTodoList.addTask("Walk the dog");
myTodoList.addTask("Complete homework");
myTodoList.displayTasks();
myTodoList.markAsComplete("Walk the dog");
myTodoList.displayTasks();
myTodoList.removeTask("Buy groceries");
myTodoList.displayTasks();
myTodoList.removeTask("Go to the gym");
