
import SavedList from "./ls.js";
import Utilities from "./utilities.js";
import Task from "./task.js";

export default class ToDoList {
    constructor() {
        this.ls = new SavedList();
        this.utilty = new Utilities();

        this.tasks = [];
       
         //JSON.parse(this.ls.getLs());

        console.log(JSON.stringify(this.tasks));

        //alert("Loaded: " + JSON.stringify(savedTasks));
                   
        this.displayMethod = 'all';

        this.renderAll();
    }

    renderAll() {
        //alert(this.displayMethod)

        //clears list and displays everything for selected display mode
        const taskList = document.getElementById("tasks");

        taskList.innerHTML = "";
        var tasksToRender = this.tasks;

        if (this.displayMethod === 'active') {

            tasksToRender = this.utilty.sortActive(this.tasks);

        }
        else if (this.displayMethod === 'complete') {

            
            tasksToRender = this.utilty.sortCompleted(this.tasks);

        }
       
        for (let i = 0; i < tasksToRender.length; i++) {

            
            console.log(JSON.stringify(this.tasks[i]));

            this.renderTask(this.tasks[i]);

            
        }
        

    }

    filterAll() {
        //sets display mode filer to all
        this.displayMethod = 'all';
        this.renderAll();
    }

    filterActive() {
        //sets display mode filter to all
        this.displayMethod = 'active';
        this.renderAll();
    }

    filterComplete() {
        
        //sets display mode filter to all
        this.displayMethod = 'complete'
        this.renderAll();
    }

    renderTask(taskToRender) {

        //render one task

        //create div for one item
        const taskList = document.getElementById("tasks");
        const item = document.createElement("div");
        taskList.appendChild(item);
        

        //create divs
        const boxDiv = document.createElement("div");
        const labelDiv = document.createElement("div");
        const buttonDiv = document.createElement("div");

        //add divs to parent
        item.appendChild(boxDiv);
        item.appendChild(labelDiv);
        item.appendChild(buttonDiv);
        //add classes to divs
        item.classList.add("individualItem");
        //labelDiv.classList.add("padTask");
        //labelDiv.classList.add("taskText");
        //buttonDiv.classList.add("padTask");

        //add individual items to the divs
        //********************************

        //add checkbox
        const box = document.createElement("input");
        boxDiv.appendChild(box);

        box.type = "checkbox";
        box.classList.add("taskItem");
        box.id = taskToRender.id;

        if (taskToRender.isCompleted) {
            box.checked = true;
        }
        

        //add label 
        const label = document.createElement("label");
        labelDiv.appendChild(label);

        label.htmlFor = taskToRender.id;
        label.innerHTML = taskToRender.content;
        

        //add button
        const button = document.createElement("input");
        buttonDiv.appendChild(button);

        button.classList.add("button");
        button.type = "button";
        button.id = taskToRender.id + "_button";
        button.value = "X";


        //listeners
        box.addEventListener("change", () => { this.toggleComplete(taskToRender, box, label) });
        button.addEventListener("click", () => { this.deleteTask(taskToRender)});

        this.updateTasksLeft();
       
        
    }

    addTask() {
        //adds task an pushes task to task array
        
        var taskContent = document.getElementById("newContent").value;
        var taskId = Date.now();
        var newTask = new Task(taskId, taskContent, false);
        this.tasks.push(newTask);

        console.log(this.tasks[0].id);

        this.renderTask(newTask);
        this.saveToLocal();     
               
        document.getElementById("newContent").value = "";
    }

    saveToLocal() {
        // Save To Local

        this.ls.setLs(JSON.stringify(this.tasks));
                
        
    }

    deleteTask(taskToDelete) {
        //will delete one item

        var index = null;
        for (let i = 0; i < this.tasks.length; i++) {
                
            if (this.tasks[i].id === taskToDelete.id) {
                index = i;
            }

        }
        if (index == NaN) {
            return;
        }

        this.tasks.splice(index, 1);
        this.saveToLocal();
        this.removeTaskRendering(taskToDelete.id)

    }

    removeTaskRendering(taskId) {

        var box = document.getElementById(taskId);
        var item = box.parentNode.parentNode;

        this.updateTasksLeft();

        item.innerHTML = "";
        item.parentNode.removeChild(item);

    }

    updateTasksLeft() {

        var incomplete = this.utilty.calcIncomplete(this.tasks);

        document.getElementById("numberLeft").innerHTML = incomplete;

    }

    toggleComplete(taskToSet, box, label) {

        //toggles complete

        if (box.checked) {
            
            taskToSet.isCompleted = true;
            label.innerHTML = "<strike>" + taskToSet.content + "</strike>";
        }
        else {
            taskToSet.isCompleted = false;
            label.innerHTML = taskToSet.content;
        }

        this.updateTasksLeft();
    }

    

    
       
   

       

     
    
}