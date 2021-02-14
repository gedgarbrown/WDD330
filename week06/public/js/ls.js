
export default class SavedList {
    constructor(taskJson) {
        this.taskJson = taskJson;
    }
    setLs(taskJson) {

        this.taskJson = JSON.stringify(this.taskJson);

        localStorage.setItem('todoList', JSON.stringify(this.taskJson));
        //alert("setLS");
    }

    getLs() {
        
        this.taskJson = localStorage.getItem('todoList');
        //console.log("GetLS:" + this.taskJson)

        return this.taskJson;
    }

}