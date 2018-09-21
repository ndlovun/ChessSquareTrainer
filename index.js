var btnShowHide = document.getElementById('showHide');
var btnSelectRanSquare = document.getElementById('selectRanSquare');
var btnReset = document.getElementById('reset');
var btnEnter = document.getElementById('enter');
var squares = document.getElementsByClassName('square');
var message = document.getElementById('message');
var textBox = document.getElementById('textBox');

var tsquare = '';

//Show or hide answers
btnShowHide.addEventListener('click', function(){
    for(var i = 0; i < squares.length; i++){
		squares[i].style.color = "#8b4513";
	}
});

//Select random square to guess
btnSelectRanSquare.addEventListener('click', function(){

		for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = "#8b4513";
		squares[i].style.color = "#8b4513";
	}

	tsquare = document.getElementById(randomNum().toString());
	tsquare.style.color = "Green";
	console.log(tsquare.textContent);
	tsquare.style.backgroundColor = "Green";


});

//Reseting the board
btnReset.addEventListener('click', function(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = "#8b4513";
	}

	message.textContent = "";
	textBox.value = "";
	tsquare.style.color = "#8b4513";

});

//Entering the guess and grading logic
btnEnter.addEventListener('click', function(){
     console.log(textBox.value);
     if(textBox.value === tsquare.textContent){
     	message.textContent = "You got it right!!!!"
     } 
     else {
     	message.textContent = "You got it wrong :("
     }
});

//Random number generator 1 - 64.
function randomNum(){
	var num = Math.floor(Math.random() * (65 - 1)) + 1;
	return num;
}