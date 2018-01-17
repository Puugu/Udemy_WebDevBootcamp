var numSquares = 6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setupModeButtons();

	setupSquares();

	reset();
}

function setupModeButtons(){
	for(var i=0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "EASY" ? numSquares=3: numSquares=6;

			reset();
		})
	}
}

function setupSquares(){
	for (var i = 0; i<squares.length;i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent="Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	//reset background (from winning and clicking play again)
	h1.style.backgroundColor = "steelblue";
	//reset button text and playstate message (from clicking play again)
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent="";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i<colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick a random number for squares array
	var random = Math.floor(Math.random() * colors.length);
		/*bc random only goes between 0 and slightly-less-than-1,
		  it's okay that length is 1-indexed and the array is
		  0-indexed.*/
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var red = Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var green = Math.floor(Math.random()*256);
	//pick a "blue" from 0 to 255
	var blue = Math.floor(Math.random()*256);

	//creat rgb string
	return "rgb("+red+", "+green+", "+blue+")";
}