import { Pokemon } from "./model.js";

export async function fetchPokemon(){
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
    .then(response => response.json())
    .then(pokeJson => {
      console.log(pokeJson);
      return pokeJson.results;
    });   
}
 
export function fetchImage(imageUrl, racerId){
  fetch(imageUrl)
  .then(response => {
      if (response.ok){
          document.getElementById(racerId).src = imageUrl;
      } else {
          document.getElementById(racerId).src = "./images/pokeball.png";
          throw new Error("Not 2xx");
      }
  })
  .catch( () => console.log("Replaced image"));
}

export function saveTrainer(trainer) {
  let pokemonTrainers = localStorage.getItem('pokemonTrainers');
  let trainersArray = [];
  let trainersObject = JSON.parse(pokemonTrainers);
  
  if(trainersObject){
    for (let i=0; i < trainersObject.length; i++){
      if(trainersObject[i].id != trainer.id){
        trainersArray.push(trainersObject[i]);
      }
    }
  }
  
  trainersArray.push(trainer);

  localStorage.setItem("pokemonTrainers", JSON.stringify(trainersArray));
  console.log("saving to LS: " + trainer);
}

export function getTrainerObjectsFromLs() {
  let pokemonTrainers = localStorage.getItem('pokemonTrainers');
  let trainersNames = [];
  let trainersObject = JSON.parse(pokemonTrainers);

  if(trainersObject){
    for (let i=0; i < trainersObject.length; i++){
      trainersNames.push(trainersObject[i]);
    }
  }
  //console.log(trainersNames);
  return trainersNames; 
}

export function getTrainerFromLs(id) {
  let pokemonTrainers = localStorage.getItem('pokemonTrainers');
  
  let trainersObject = JSON.parse(pokemonTrainers);
  
  if(trainersObject){
    for (let i=0; i < trainersObject.length; i++){
      console.log("Looking for " + id + " Checking " + trainersObject[i].name + " id " + trainersObject[i].id);
      console.log("if is " + (id == trainersObject[i].id));
      if (id == trainersObject[i].id){
        console.log("found match");
        return trainersObject[i];
      }
      
    }


  }

  return null;

}

