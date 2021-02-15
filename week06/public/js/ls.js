
export default class SavedList {
    constructor(taskJson) {
        
        this.taskJson = "";
    }
    setLs(tasksJson) {

        this.taskJson = tasksJson;

        localStorage.setItem('todoList', this.taskJson);
        console.log("saving to LS: " + this.taskJson);
        //alert("setLs: " + this.taskJson)
    }

    getLs() {
        
        this.taskJson = localStorage.getItem('todoList');
        //console.log("GetLS:" + this.taskJson)
        
        console.log("retrieving from LS: " + this.taskJson);
       
        return this.taskJson;
    }

}