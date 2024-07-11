//Toggle nav bar below 
const burger = document.querySelector(".burger i");
console.log(burger);
const nav = document.querySelector(".nav");
console.log(nav);

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("navactive");
console.log("clicked");
}


// form submit below
const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
	userArray.push(dataObject);
	form.reset();
}
