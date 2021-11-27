/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be seached online, and we are aware of those solutions. 
So please sight sources if you took help from any online resource.
*/



//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9. 
Usaged: This is to store the state to the tictactoe board.
When a move is made 
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/* 
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1 

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true is the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that 
turn = 1 is for player_1 and 
turn = 0 is for player_2
@Param - No param
*/
function whose_move(){
	return this.turn
}

/*
@Return void
@Param 
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() {
	this.turn = !this.turn
}

/*
@Return boolean
@Param 
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started(){
	return this.started
}


/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the field are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

function begin_play(){
	turn = 1;
	var turnvar = "X";
	// turnvarbold = turnvar.bold();
	if(started == true) {
		alert("Already started. Please Reset Play to start again.");
	}
	else if(document.getElementById('player1_id').value != '' && document.getElementById('player2_id').value != '') { // if player names are not empty
		// disable the name fields -- update the player moves as shown
		var player1 = document.getElementById("player1_id").value;
		var player2 = document.getElementById("player2_id").value;
		player1 += " (X)"; // assigning symbols
		player2 += " (O)"; // assigning symbols
		document.getElementById("player1_id").value = player1;
		document.getElementById("player2_id").value = player2;
		document.getElementById("player1_id").disabled = true;
		document.getElementById("player2_id").disabled = true;
		// update the turn information on the page
		document.getElementById("turn_info").innerHTML = "Turn for: " + turnvar.bold();
		// set the started flag to true
		started = true;
	}
	else { // if player names are empty
		alert('Two player game, names are required for both players!');
	}
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enablled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the strated flag as false

*/
function reset_play(){
	// fixing names / inputs:
	document.getElementById("player1_id").disabled = false;
	document.getElementById("player2_id").disabled = false;
	document.getElementById("player1_id").value = "";
	document.getElementById("player2_id").value = "";
	document.getElementById("move_text_id").value = "";
	document.getElementById("turn_info").innerHTML = "Game has not begin.";
	// fixing grid: ******** CHECK TO MAKE SURE IT WORKS
	document.getElementById("A1").innerHTML = "A1";
	document.getElementById("A2").innerHTML = "A2";
	document.getElementById("A3").innerHTML = "A3";
	document.getElementById("B1").innerHTML = "B1";
	document.getElementById("B2").innerHTML = "B2";
	document.getElementById("B3").innerHTML = "B3";
	document.getElementById("C1").innerHTML = "C1";
	document.getElementById("C2").innerHTML = "C2";
	document.getElementById("C3").innerHTML = "C3";
	// reset started flag
	started = false;
}

/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been player( Play button was clicked).
The method should do all the things as stated in rule 2.
1. The moves should be validated can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework) 
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>

*/
function play() {
	var input = document.getElementById("move_text_id").value;
	var turnvar;
	if(turn == 1) {
		turnvar = "X";
	}
	else {
		turnvar = "O";
	}
	// var turnvar = turnv.bold();
	// adding the input to the table:
	if(started == false) {
		alert("The game has not started yet.");
	}
	else if(input == "A1" || input == "A2" || input == "A3" || input == "B1" || input == "B2" || input == "B3" || input == "C1" || input == "C2" || input == "C3") {
		if(document.getElementById(input).innerHTML != input) { // if spot not already taken
			alert("That space is already taken! Please enter a different value!");
		}
		else {
			// update the table with the value
			document.getElementById(input).innerHTML = turnvar;
			// check if there is a win - state of the table should be validated
				// first get all the values (to make organization easier)
			var a1val = document.getElementById("A1").innerHTML;
			var a2val = document.getElementById("A2").innerHTML;
			var a3val = document.getElementById("A3").innerHTML;
			var b1val = document.getElementById("B1").innerHTML;
			var b2val = document.getElementById("B2").innerHTML;
			var b3val = document.getElementById("B3").innerHTML;
			var c1val = document.getElementById("C1").innerHTML;
			var c2val = document.getElementById("C2").innerHTML;
			var c3val = document.getElementById("C3").innerHTML;
				// then check all possible combinations;
				// HORIZONTAL
			if(a1val == a2val && a1val == a3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			else if(b1val == b2val && b1val == b3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			else if(c1val == c2val && c1val == c3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
				// VERTICAL
			else if(a1val == b1val && a1val == c1val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			else if(a2val == b2val && a2val == c2val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			else if(a3val == b3val && a3val == c3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
				// DIAGONAL
			else if(a1val == b2val && b2val == c3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			else if(c1val == b2val && b2val == a3val) {
				if(turn == 1) 
					alert("Winner is X!");
				else 
					alert("Winner is O!");
				reset_play();
			}
			// if not a win yet, update who's turn it is (turn and title for who's turn it is)
			else {
				turn = !turn;
				document.getElementById("move_text_id").value = "";
				if(turn == 1) {
					turnvar = "X";
				}
				else {
					turnvar = "O";
				}
				// turnvar = turnv.bold();
				document.getElementById("turn_info").innerHTML = "Turn for: " + turnvar.bold();
			}
		}
	}
	else {
		alert("Please enter a valid cell value!");
	}
}

/*
Do not change this method.
*/
function moveEnter(event) {		
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
