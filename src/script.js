
/* 
  Get words from backend or wherever
  import { wordArr} from "./words.js";
*/

let guessesRemaining = 6;
let currentGuess = [];

//This is the random word the user is trying to guess
//let AnswerWord = wordArr[Math.floor(Math.random() * WORDS.length)]



//Creating the actual game layout


function initLayout(){
	let layout = document.getElementById("layout");
	
	//Row for each guess
	for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        	let row = document.createElement("div")
        	row.className = "wordRow"
        
	//5 boxxes for each guess 
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letterBox"
            row.appendChild(box)
        }

        layout.appendChild(row)
    }
}

initBoard();