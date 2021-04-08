import { displayQuestion, moveRacer, resetRace, displayRaceUi, displayPreRaceUi, 
    displayGoodAlert, displayBadAlert, displayDialog, 
        displayOpponents, displayRaceWinner, loadTrainersNames,
        displayTrainerName, displayStatistics,
        closeDialogBox} from "./view.js";
import { Question, Trainer } from "./model.js";
import { saveTrainer, getTrainerObjectsFromLs, getTrainerFromLs } from "./utilities.js";

export class Race {
    constructor(difficulty = 50, trainer, playerPokemon, computerPokemon) {
        this.playerScore = 0;
        this.computerScore = 0;
        this.raceOver = false;
        this.difficulty = difficulty;
        displayRaceUi();
        this.playerpokemon = playerPokemon;
        this.computerpokemon = computerPokemon;
        this.trainer = trainer;
        this.trainer.races += 1;
        console.log(this.trainer);
        console.log(trainer);
        saveTrainer(this.trainer);
        resetRace();

        this.loadQuestion();
    }

    loadQuestion() {

        let type = 'addition'; //Change this to vary

        this.question = new Question(type);

        displayQuestion(this.question);
        
        document.getElementById("questionReply").addEventListener("change", () => {
             this.processReply() });

    }
    checkForWinner() {
        
        if (this.playerScore > 9){
            this.trainer.wins += 1;
            saveTrainer(this.trainer);
            return this.trainer.name;
        }
        if (this.computerScore > 9){
            this.trainer.losses +=1;
            saveTrainer(this.trainer);
            return "The computer";
        }

        return null;
    }
    
    endRace(winner) {
        
        displayRaceWinner(winner + " won the race!!");
        this.raceOver = true;
        displayPreRaceUi();
        
        this.question = null;
    }

    processComputerTurn(){
        console.log("Computer turn, has moved: " + this.question.computerMoved);
        if (this.question.computerMoved === true){
            return false;
        }
        
        this.question.computerMoved = true;

        let chance = Math.floor(Math.random() * 100);
        console.log("Check computer chance " + chance);

        if (chance < this.difficulty){
            console.log("Computer will move");
            return true;
        }

        return false;
    }
    processReply() {
        console.log("Processing ");
        console.log("Computer score: " + this.computerScore);
        console.log("Player score: " + this.playerScore);
        if (this.raceOver === true){
           console.log("race over");
           return;
        }

        if  (this.question.answered === true){
            console.log("question answered");
           return;
        }

        let reply = document.getElementById("questionReply").value;
        if (reply == ""){
            return;
        }
        
        if (isNaN(reply)){
            displayBadAlert("You must enter a number!");
            document.getElementById("questionReply").value = "";
            return;
        }

        let isCorrect = this.question.checkAnswer(reply);

        if (isCorrect){
            this.playerScore++;
            moveRacer("racer1");
            //window.setTimeout(() => alert("Correct!", 20));
            displayGoodAlert("Correct!!");
        } else {
            displayBadAlert("Incorrect!!");
        }

        let computerCorrect = this.processComputerTurn();
        if (computerCorrect){
            this.computerScore++;
            moveRacer("racer2");
        }

        let winner = this.checkForWinner();

        if(winner){
            this.endRace(winner);
            
        } else {
            this.question = null;
            this.loadQuestion();
        }

    }


}

export function startRace(trainer, playerPokemon, computerPokemon){
    if (!trainer){
        displayBadAlert("Trainer is Invalid, cannot start race!");
        return;
    }

    let difficulty = parseInt(document.getElementById("level").value);
    const race = new Race(difficulty, trainer, playerPokemon, computerPokemon);

}

export function showTrainerDialog(){
    console.log("Creating Trainer");

    displayDialog("createTrainerDialog");
    
}

export function loadTrainer() {
    let trainerId = document.getElementById("selectTrainer").value;
    let trainer = getTrainerFromLs(trainerId);
    console.log(trainer);
    if (!trainer) {
        displayBadAlert("Trainer not Found. Try again.");
        return;
    }
    
    displayTrainerName(trainer.name);
    closeDialogBox("loadTrainerDialog");

    return trainer;
}

export function createTrainer(maxPokemon) {
    let name = document.getElementById("newName").value;

    let trainer = new Trainer(name);

    let pokemon = Math.floor(Math.random() * maxPokemon);
    trainer.inventory.add(pokemon);


    displayTrainerName(name);
    closeDialogBox("createTrainerDialog");
    saveTrainer(trainer);
    return trainer;

}

export function showLoadDialog() {
    
    let lsTrainers = getTrainerObjectsFromLs();
    loadTrainersNames(lsTrainers);
    displayDialog("loadTrainerDialog");
}

export function showStatisticsDialog(trainer){

    displayStatistics(trainer);
    displayDialog("statistics");

}
