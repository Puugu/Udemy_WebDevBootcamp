var button = document.querySelector("button");
var isClicked = false;

button.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("clicked");
});

button.addEventListener("click", function(){
	if(isClicked){
		button.textContent = "Click Me!!"
	}
	else {
		button.textContent= "Change it back!!!"
	}
	isClicked = !isClicked; //toggles t/f
})