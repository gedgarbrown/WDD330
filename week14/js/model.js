export class Pokemon{
    constructor(id){
        this.pokemonId;
        this.name = "name";
        this.pictureUrl = `https://pokeres.bastionbot.org/images/pokemon/${id + 1}.png`;
        console.log(this.pictureUrl);
        this.pokeType = "";
    }
    setPokeType(type){
        this.pokeType = type;
    }
}

export class QuestionStatistic {
    constructor(questionType){  
        this.questionType = questionType;
        this.right = 0;
        this.wrong = 0;
    }
}

export class Trainer {
    constructor(name){
        this.name = name;
        this.inventory = new Set();
        this.races = 0;
        this.wins = 0;
        this.losses = 0;  
        this.id = Date.now();
              
    }
    addPokemon(id){
        this.inventory.add(id);
    }
    removePokemon(id){
        this.inventory.delete(id);
    }  

}

export class Question {
    constructor(type) {
        this.type = type;
        this.x = Math.floor(Math.random() * 10) + 1;
        this.y = Math.floor(Math.random() * 10) + 1;
        this.operator = "+";
        this.answered = false;
        this.computerMoved = false;
        this.name = Date.now();
    }
    checkAnswer(reply){
        let answer = (this.x + this.y) + "";
        console.log("Checking answer: reply; " + reply + " answer; " + answer + " result" + (answer == reply));
        if (answer == reply){
            return true;
        }
        return false;
    }
}

