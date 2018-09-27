let showMenuBtn = document.querySelector('#showMenuBtn');
let hideMenuBtn = document.querySelector('#menuCloseBtn');
let showMenuIcon = document.querySelector('#showMenuIcon');
let hideMenuIcon = document.querySelector('#hideMenuIcon');
let nav = document.querySelector('nav');

// function to show menu
function showMenu(event) {
	// slide nav onto screen
	nav.style.right = "0";
	event.preventDefault();
	return false;
}

// function to hide menu
function hideMenu(event) {
	// slide nav off screen
	nav.style.right = "-100vw";
	event.preventDefault();
	return false;
}

showMenuBtn.addEventListener("click" | "touchstart", showMenu);
// showMenuBtn.addEventListener("touchstart", showMenu);
hideMenuBtn.addEventListener("click" | "touchstart", hideMenu);
// hideMenuBtn.addEventListener("touchstart", hideMenu);