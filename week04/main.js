const form =document.forms[0];
const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('change', () => alert('changed'), false);
//const form = document.forms['search'];
//form.action = 'index.html';
input.value = 'Search Here';
form.addEventListener ('submit', search, false);
function search(event) {
	const searchFor = input.value;
    alert('You searched for: ' + searchFor);
	event.preventDefault();
}

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

const form2 = document.forms['hero'];
form2.addEventListener('submit', makeHero, false);
form2.addEventListener('submit', validate, false);

const label = form2.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form2.heroName.value; // create a name property based on the input field's value
    hero.powers = [];
	//for (let i=0; i < form2.powers.length; i++) {
    //if (form2.powers[i].checked) {
      //  hero.powers.push(form2.powers[i].value);
		//}
	//}
	hero.powers = [...form2.powers].filter(box => box.checked).map(box => box.value);
	
	hero.category = form2.category.value;
	hero.city = form2.city.value;
	hero.origin = form2.origin.value;
	
	alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

function validate(event) {
    const firstLetter = form2.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
