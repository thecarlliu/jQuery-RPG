
//__________________________________________________JQUERY_RPG______________________________________________

//___________________________________________________VARIABLES______________________________________________

var gamePhase = 0;
var playerChar = undefined;
var charList = [];
var enemyChar;
var enemyChars = [];

//Object char containing all the selectable chars and their attributes.
var char = {
	char1: { //for testing
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot1",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char2: {
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot2",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char3: {
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot3",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char4: {
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot4",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char5: {
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot5",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},
	char6: {
		img: '../jQuery-RPG/assets/images/testBot.png',
		name: "TestBot6",
		lvl: 50, //max 100, no effect
		hp: 140, //max 200
		atk: 6, //max 10, multiplies move dmg
		def: 3, //max 10, dmg reduction
		spd: 7, //max 10, decides who moves first
		movepool: ["", "", "", ""] //4 moves
	},

	display: function (selectedChar) {
		//show char img, name, lvl, hp
		var charDisplay = $("<div>", {
			id: selectedChar.name
		});
		var charImg = $("<img>", {
			src: selectedChar.img,
			width: 50,
			height: 50
		});
		var charLvl = $("<div>", {
			text: "Lvl: "+selectedChar.lvl
		});
		var charName = $("<div>", {
			text: selectedChar.name
		});
		var charHP = $("<div>", {
			text: "HP: "+selectedChar.hp
		})
		charHP.appendTo(charDisplay);
		charImg.appendTo(charDisplay);
		charLvl.appendTo(charDisplay);
		charName.appendTo(charDisplay);
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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
		animate: function (selectedChar) {
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

charList = [char.char1, char.char2, char.char3, char.char4, char.char5, char.char6];

//TESTING:
startScreen();

//Displays the titleScreen and startButton
function startScreen() {
	//set var gamePhase = 1;
	gamePhase = 1;
	//creates titleScreen;
	var titleScreen = $("<div>", {
		id: "title"
	});
	titleScreen.appendTo($(".gameScreen"));
	//creates the titleImg;
	var titleImg = $("<img>", {
		src: "http://via.placeholder.com/800x400"
	});
	titleImg.appendTo(titleScreen);
	//creates startBtn;
	var startBtn = $("<button>");
	$(startBtn).addClass("start-button");
	startBtn.text("START");
	startBtn.appendTo(titleScreen);
	//if startButton pressed, startGame();
	startBtn.on("click", function () {
		titleImg.toggle();
		startBtn.toggle();
		startGame();
	});
}

//Starts the game. Allows the user to choose a character, and an opponent to face.
function startGame() {
	selectScreen();
	chooseChar();
	//nextPhase();

	var confirmBtn = $("<button>");
	$(confirmBtn).addClass("confirm-button");
	confirmBtn.text("CONFIRM");
	confirmBtn.appendTo($(".gameScreen"));
	confirmBtn.click(function () {
		if (playerChar != undefined) {
			confirmBtn.toggle();
			//chooseEnemy();
		}
	});
}

//Shows the characters that can be selected.

function selectScreen() {
	alert("Choose your character!");
	//display chars;
	for (i=0; i<charList.length; i++) {
		char.display(charList[i]);
		var c = document.getElementById(charList[i].name);
		c.style.position = "absolute";
		c.style.left = i*65+30+"px";
		c.style.top = "10px";
		if (i>2) {
			c.style.top = "130px";
			c.style.left = (i-3)*65+30+"px";
		}
	}
}

//Player clicks on a character to highlight it, then clicks the confirm button.
function chooseChar() {
	var clicked = false;
	$("#TestBot1").click(function () {
		if (clicked == false) {
			playerChar = "TestBot1";
			console.log("a char has been selected: "+playerChar);
			$("#TestBot1").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot2").click(function () {
		if (clicked == false) {
			playerChar = "TestBot2";
			$("#TestBot2").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot3").click(function () {
		if (clicked == false) {
			playerChar = "TestBot3";
			$("#TestBot3").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot4").click(function () {
		if (clicked == false) {
			playerChar = "TestBot4";
			$("#TestBot4").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot5").click(function () {
		if (clicked == false) {
			playerChar = "TestBot5";
			$("#TestBot5").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot6").click(function () {
		if (clicked == false) {
			playerChar = "TestBot6";
			$("#TestBot6").css({
				"border-color": "blue",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			playerChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
}

function setAllUnclicked() {
	$("#TestBot1").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
	$("#TestBot2").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
	$("#TestBot3").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
	$("#TestBot4").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
	$("#TestBot5").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
	$("#TestBot6").css({
				"border-color": "none",
				"border-weight": "0px",
				"border-style": "none"});
}

function chooseEnemy() {
	var clicked = false;
	$("#TestBot1").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot1";
			console.log("a char has been selected: "+enemyChar);
			$("#TestBot1").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot2").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot2";
			$("#TestBot2").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot3").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot3";
			$("#TestBot3").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot4").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot4";
			$("#TestBot4").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot5").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot5";
			$("#TestBot5").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
	$("#TestBot6").click(function () {
		if (clicked == false) {
			enemyChar = "TestBot6";
			$("#TestBot6").css({
				"border-color": "red",
				"border-weight": "1px",
				"border-style": "solid"});
			clicked = true;
		}
		else if (clicked == true) {
			enemyChar = undefined;
			setAllUnclicked();
			clicked = false;
		}
	});
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



