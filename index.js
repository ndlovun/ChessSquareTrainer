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

// valid chess squares
validChessSquares = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 
					 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 
					 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 
					 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 
					 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 
					 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 
					 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 
					 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8' ]

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

//submitting guess by pressing enter 
document.getElementById('textBox')
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById('enter').click();
    }
});

//Entering the guess and grading logic
function buttonCode()
{
  //do not allow an invalid guess empty guess
	if (!validChessSquares.includes((textBox.value).toLowerCase())){
		message.textContent = "Please enter a valid guess!"
	}
    else if(counter < 10){
    // console.log(textBox.value);
    if((textBox.value).toLowerCase() === tsquare.textContent){
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
}


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
	// console.log(tsquare.textContent);
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
    // console.log(tsquare.textContent);
};
