
//__________________________________________________JQUERY_RPG______________________________________________

//___________________________________________________VARIABLES______________________________________________

var gamePhase = 0;
var playerChar;
var enemyChar;
var enemyChars = [];

//Object char containing all the selectable chars and their attributes.
var char = {
	char1: { //for testing
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char2: {
		img: "",
		name: "",
		lvl: 0,
		hp: 0,
		atk: 0,
		def: 0,
		spd: 0,
		movepool: ["", "", "", ""]
	},
	char3: {
		img: "",
		name: "",
		lvl: 0,
		hp: 0,
		atk: 0,
		def: 0,
		spd: 0,
		movepool: ["", "", "", ""]
	},
	char4: {
		img: "",
		name: "",
		lvl: 0,
		hp: 0,
		atk: 0,
		def: 0,
		spd: 0,
		movepool: ["", "", "", ""]
	},
	char5: {
		img: "",
		name: "",
		lvl: 0,
		hp: 0,
		atk: 0,
		def: 0,
		spd: 0,
		movepool: ["", "", "", ""]
	},
	char6: {
		img: "",
		name: "",
		lvl: 0,
		hp: 0,
		atk: 0,
		def: 0,
		spd: 0,
		movepool: ["", "", "", ""]
	},
	display: function (selectedChar) {
		//show char img, name, lvl, hp
		var charDisplay = $("<div>");
		var charImg = $("<img>", {
			id: selectedChar.name,
			src: selectedChar.img,
			width: 50,
			height: 50
		});
		//var charText = $("<p>Lvl "+selectedChar.lvl+", "+selectedChar.name+", HP: "+selectedChar.hp+"</p>");
		//charText.appendTo(charDisplay);
		charDisplay.text("Lvl "+selectedChar.lvl+", "+selectedChar.name+", HP: "+selectedChar.hp);
		charImg.appendTo(charDisplay);
		charDisplay.appendTo($(".gameScreen"));
	},
	description: function (selectedChar) {
		//show char description
	},
	stats: function (selectedChar) {
		//show char atk, def, spd, movepool
	}
};

var moveList = {
	move1: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move2: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move3: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move4: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move5: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move6: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move7: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move8: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move9: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	move10: {
		name: "",
		description: "",
		pp: 0,
		dmg: 0,
		block: 0,
		heal: 0,
		animate: function () {
		//animates the move
		}
	},
	display: function (selectedMove) {
		//show name, pp
	},
	description: function (selectedMove) {
		//show description
	}
};

//_________________________________________________GAME_MECHANICS___________________________________________

//TESTING:
char.display(char.char1);

//Displays the titleScreen and startButton
function startScreen() {
	//set var gamePhase = 1;
	gamePhase = 1;
	//if startButton pressed, startGame();
	var startBtn = $("<button>");
	$(startBtn).addClass("letter-button letter letter-button-color");

}

//Starts the game. Allows the user to choose a character, and an opponent to face.
function startGame() {
	//showSelection();
	//chooseChar();
	//chooseEnemy();
	//nextPhase();
}

//Shows the characters that can be selected.
//Player clicks on a character to highlight it, then clicks the confirm button.
function showSelection() {
	//display chars;
}

//Starts the next phase of the game. Either starts the battle mode, or returns to the selection screen.
//Also checks if there are any opponents left to battle.
//If there are none, then the player has beaten the game.
function nextPhase() {
	//if gamePhase ==1, set ==2, startBattle();
	//if gamePhase ==2, set ==1, chooseBattle();
	//if no opponents are left, gameWin();
}

//Initiates the battle mode. And allows the user to make a decision, also known as taking a turn.
function startBattle() {
	//takeTurn();
}

//The player can choose to use a move from their movepool. The enemy will do the same.
//The person that uses a move first is determined by the difference in speed.
//At the end of each turn, the game will check if either character's HP is 0.
function takeTurn() {
	//playerTurn();
	//enemyTurn();
	//attackPhase();
	//checkVictory();
	//checkDefeat();
}

function playerTurn() {
	//we choose a move
}

function enemyTurn() {
	//enemy chooses a move
}

function attackPhase() {
	//decideFirst();
}

function decideFirst() {
	//if our char speed is higher than the enemy's, playerMove() then enemyMove();
	//else, enemyMove() then playerMove();
}

function playerMove() {
	//show player using their move
	//apply effects
}

function enemyMove() {
	//show enemy using their move
	//apply effects
}

//If the enemy has 0 HP, the next phase is initiated.
//The player moves on and chooses a new enemy to battle.
function checkVictory() {
	//if enemyHP == 0, nextPhase();
	//if no enemies left, gameWin();
}

//If the player's character has 0 HP, the game is over.
function checkDefeat() {
	//if selfHP == 0, gameOver();
}

//Ends the battle mode, and allows the player to select a new opponent to face.
//Once an enemy is selected, the next battle will start and battle mode will be initiated.
function chooseBattle() {
	//chooseEnemy();
	//nextPhase();
}

//Shows Game Over Screen.
function gameOver() {
	//tryAgain();
}

//Shows Victory Screen.
function gameWin() {
	//playAgain();
}

//Asks the player if they wish to try again.
function tryAgain() {
	//var tryAgain = confirm("You blacked out! Try again from the start?");
	//if true, resetGame();
	//else, return to start screen.
}

//Asks the player if they wish to play again.
function playAgain() {
	//var playAgain = confirm("You have beaten the game! Would you like to play again?");
	//if true, resetGame();
	//else, return to start screen.
}

//Resets the game.
function resetGame() {
	//return to selection screen. reset all variables.
}

//Listens for a special key combination during the player's turn.
//If pressed, will choose a hidden move that will automatically reduce the enemy's HP to 0.
//Nice to use for testing purposes. Or to win.
function ggEz() {

}



