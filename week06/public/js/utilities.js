import Task from "./task.js";

export default class Utilities {
    constructor() {
        
    }

    sortActive(tasks) {
        var activeTasks = [];

        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].isCompleted) {
                activeTasks.push(tasks[i]);
            }
        }

        return activeTasks;
    }

    sortCompleted(tasks) {
        var completedTasks = [];

        for (var i = 0; i < tasks.length; i++) {

            if (tasks[i].isCompleted) {

                completedTasks.push(tasks[i]);
            }
        }

        return completedTasks;
    }

    calcIncomplete(tasks) {

        var total = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].isCompleted) {
                total++;
            }
        }
        return total;
    } 

    

}

