var btnShowHide = document.getElementById('showHide');
var btnSelectRanSquare = document.getElementById('selectRanSquare');
var btnReset = document.getElementById('reset');
var btnEnter = document.getElementById('enter');
var squares = document.getElementsByClassName('square');
var message = document.getElementById('message');
var textBox = document.getElementById('textBox');

var tsquare = '';
var counter = 0;
var right = 0;
var wrong = 0;

window.onload = function(){
  	flashAnimation();
 }

//Reseting the board
btnReset.addEventListener('click', function(){
	flashAnimation();
	resetBoard();
	RanSquarePicker();
	counter = 0;
	right = 0;
	wrong = 0;

});

//Entering the guess and grading logic
btnEnter.addEventListener('click', function(){
	//do not allow an empty guess
	if (textBox.value === ""){
		message.textContent = "Please enter a guess!"
	}
    else if(counter < 10){
    console.log(textBox.value);
    if(textBox.value === tsquare.textContent){
     message.textContent = "Correct!, guess next square."
     right += 1;
	 textBox.value = "";
    }
    else {
     message.textContent = "Incorrect, guess next square."
     wrong += 1;
	 textBox.value = "";
    }
    counter += 1;
    RanSquarePicker();
  } else {
	textBox.value = "";
    message.textContent = "Game over you got " + ((right / 10).toString() * 100) + "% right.";
  }

});

//Random number generator 1 - 64.
function randomNum(){
	var num = Math.floor(Math.random() * 64 + 1);
	return num;
}

function RanSquarePicker(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = "#8b4513";
		squares[i].style.color = "#8b4513";
	}

	tsquare = document.getElementById(randomNum().toString());
	tsquare.style.color = "Green";
	console.log(tsquare.textContent);
	tsquare.style.backgroundColor = "Green";

}

function resetBoard(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = "#8b4513";
		squares[i].style.color = "#8b4513";
	}
	message.textContent = "";
	textBox.value = "";
}

function flashAnimation(){
  	var timesRun = 0;
    var interval = setInterval(function(){
    	timesRun += 1;
    	if(timesRun === 10){
    		clearInterval(interval);
    	}
    	RanSquarePicker();
    }, 100);
    console.log(tsquare.textContent);
};
