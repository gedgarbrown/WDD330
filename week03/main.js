function makeUser() {
  return {
    name: "John",
    ref() { return this;}
  };
}

function example1() {
let user = makeUser();

alert( user.ref().name ); // What's the result?
}

function calculator (){
	let calculator = {	
		 sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
	};

	calculator.read();
	alert( calculator.sum() );
	alert( calculator.mul() );

}

function rolldie(){
	const die = {
		sides: 6, 
		roll() {
			return Math.floor(this.sides * Math.random()) +1;
		}
	}
	alert(die.roll());
	
}
