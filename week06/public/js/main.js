import ToDoList from "./todo.js";

// ToDoList



const todoList = new ToDoList();

//on load grab the array and insert it into the page
//window.addEventListener("load", () => { todoList.displayList() });
document.getElementById("all").addEventListener("click", () => { todoList.filterAll(); });
document.getElementById("active").addEventListener("click", () => { todoList.filterActive(); });
document.getElementById("completed").addEventListener("click", () => { todoList.filterComplete(); });
document.getElementById("createTask").addEventListener("click", () => { todoList.addTask(); });