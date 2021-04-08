export function resetRace(){
   
    racer1.style.left = "10px";
    racer2.style.left = "10px";
    
}

export function moveRacer(racer) {

    console.log("Moving " + racer);

    let racerPiece = document.getElementById(racer);
    let racerStyle = getComputedStyle(racerPiece);
    let racerX = parseInt(racerStyle.getPropertyValue('left'));
    let trackWidth = parseInt(document.getElementById("track").width);
    let finishWidth = parseInt(document.getElementById("finish").width);
    let moveAmount = (trackWidth +finishWidth) * 0.09;
    let adjustX = racerX + moveAmount;
    console.log(racerX); // debugging
    console.log(adjustX); // debugging
    //racerPiece.setAttribute("left", (racerX + adjustX) + "px");    
    racerPiece.style.left = (adjustX) + "px"; 
    
    //console.log(racerPiece.style.left); //debugging
   // console.log(racerPiece); //debugging
    
}

export function displayOpponents(opponent1, opponent2) {
    
    opponent1 = opponent1.charAt(0).toUpperCase() + opponent1.slice(1);
    opponent2 = opponent2.charAt(0).toUpperCase() + opponent2.slice(1);
    document.getElementById("poke1").innerText = opponent1;
    document.getElementById("poke2").innerText = opponent2;


}

export function displayQuestion(question) {
    const questionReply = document.getElementById("questionReply");
    //const submitQuestion = document.getElementById("submitQuestion");
    const questionText = document.getElementById("questionText");
    const questionBox = document.getElementById("question");

    
    questionText.innerText = "What is " + question.x + " " + question.operator + " "
        + question.y + "?";

    questionReply.hidden = false;
    questionReply.value = "";
    questionReply.focus();
    //submitQuestion.hidden = false;
    questionBox.style.borderColor = "red";    

}

export function displayRaceUi(){
    let startButton = document.getElementById("startRace")
    startButton.disabled = true;
    startButton.style.backgroundColor = "gray";
}

export function displayPreRaceUi() {
   
    let startButton = document.getElementById("startRace")
    startButton.disabled = false;
    startButton.style.backgroundColor = "green";

    const questionBox = document.getElementById("question");
    const questionReply = document.getElementById("questionReply");
    //const submitQuestion = document.getElementById("submitQuestion");
    const questionText = document.getElementById("questionText");
    
    questionText.innerText = "";

    questionReply.hidden = true;
    //submitQuestion.hidden = true;
    questionBox.style.borderColor = "grey"; 

}

export function displayRaceWinner(message) {
    let modal = document.getElementById("alertBox");
     modal.style.display = "block";
     modal.style.backgroundImage = "radial-gradient(mediumblue, royalblue)";
     modal.style.color = "gold";
     modal.borderColor = "green";
     modal.innerText = message;
     setTimeout(() => {modal.style.display = "none";}, 3000);


}

 export function displayGoodAlert(message = "Good!") {
     let modal = document.getElementById("alertBox");
     modal.style.display = "block";
     modal.style.backgroundImage = "radial-gradient(green, lightgreen)";
     modal.style.color = "white";
     modal.borderColor = "green";
     modal.innerText = message;
     setTimeout(() => {modal.style.display = "none";}, 3000);

 }

 export function displayBadAlert(message = "Something ugly happened!") {
    let modal = document.getElementById("alertBox");
    modal.style.display = "block";
    modal.style.backgroundImage = "radial-gradient(firebrick, maroon)";
    modal.style.color = "white";
    modal.borderColor = "maroon";
    modal.innerText = message;
    setTimeout(() => {modal.style.display = "none";}, 3000);

 }

 function clearDialogWindows() {
    const trainerName = document.getElementById("newName");
    const selectTrainer = document.getElementById("selectTrainer");
    const stats = document.getElementById("stats");

    trainerName.value = "";
    selectTrainer.innerHTML = "";
    stats.innerHTML = "";
    
 }

 export function closeDialogBox(dialogId){
    let dialog = document.getElementById(dialogId);
    clearDialogWindows();
    dialog.style.display = "none";

 }

 export function displayDialog(dialogId){
    
    let dialog = document.getElementById(dialogId);
    let closeBtn = dialog.querySelector(".closeBtn");
    
    
     dialog.style.display = "block";
    
    closeBtn.onclick = function(){
        closeDialogBox(dialogId);
    }

    window.onclick = function(e){
        if(e.target == dialog){
            closeDialogBox(dialogId);
        }
    }
 }

 

 export function displayTrainerName(name) {
    document.getElementById("currentTrainer").innerText = name;

 }

 export function loadTrainersNames(trainerArray) {
     const selectList = document.getElementById("selectTrainer");
     console.log(trainerArray);
     for(let i = 0; i < trainerArray.length; i++){
         if(trainerArray[i]) {
            let newValue = document.createElement("option");
            newValue.value = trainerArray[i].id;
            newValue.innerText = trainerArray[i].name;
            selectList.appendChild(newValue);

         }
        
        
     }
 }

 export function displayStatistics(trainer){
    const stats = document.getElementById("stats");
    let name = document.createElement("div");
    let races = document.createElement("div");
    let won = document.createElement("div");
    let lost = document.createElement("div");
    let abandoned = document.createElement("div");


    stats.appendChild(name);
    stats.appendChild(races);
    stats.appendChild(won);
    stats.appendChild(lost);
    stats.appendChild(abandoned);

    console.log(trainer);

    name.innerText = "Statistics for " + trainer.name;
    races.innerText = "Races played: " + trainer.races;
    won.innerText = "Races won: " + trainer.wins;
    lost.innerText = "Races lost: " + trainer.losses;
    abandoned.innerText = "Races abandoned: " + (trainer.races - trainer.wins - trainer.losses);

 }


