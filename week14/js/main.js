import { displayOpponents, moveRacer, resetRace } from "./view.js";
import { fetchPokemon, fetchImage } from "./utilities.js";
import { Pokemon } from "./model.js";
import { startRace , createTrainer, showTrainerDialog, 
    showLoadDialog, loadTrainer, showStatisticsDialog} from "./controller.js";

const maxPokemon = 1118; 

const pokemonObject = await fetchPokemon();
console.log(pokemonObject);

let trainer = null;


function setRacers() {
    let racer1Id = Math.floor(Math.random() * maxPokemon);
    console.log(racer1Id);
    let racer2Id = Math.floor(Math.random() * maxPokemon);
    console.log(racer2Id);

    let racer1Pokemon = new Pokemon(racer1Id);
    let racer2Pokemon = new Pokemon(racer2Id);




    displayOpponents(pokemonObject[racer1Id].name, pokemonObject[racer2Id].name);

    fetchImage(racer1Pokemon.pictureUrl, "racer1");
    fetchImage(racer2Pokemon.pictureUrl, "racer2");

    console.log(racer1Pokemon.pictureUrl);
    console.log(racer2Pokemon.pictureUrl);

}


setRacers();



document.getElementById("trainerSubmit").addEventListener("click", () => { trainer = createTrainer(maxPokemon);})
document.getElementById("createTrainer").addEventListener("click",  () => { showTrainerDialog()})
document.getElementById("startRace").addEventListener("click", () => { startRace(trainer) });
document.getElementById("loadTrainer").addEventListener("click", () => { showLoadDialog()});
document.getElementById("loadSubmit").addEventListener("click", () => { trainer = loadTrainer();});
document.getElementById("showStatistics").addEventListener("click", () => {showStatisticsDialog(trainer)});

//document.getElementById("moveTop").addEventListener("click", () => { moveRacer("racer1") });
//document.getElementById("moveBottom").addEventListener("click", () => { moveRacer("racer2") });


