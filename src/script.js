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
      
   //5 boxes for each guess
       for (let j = 0; j < 5; j++) {
           let box = document.createElement("div")
           box.className = "letterBox"
           row.appendChild(box)
       }
 
       layout.appendChild(row)
   }
}
 
 
function addLetter (pressedKey) {
   if (nextLetter === 5) { //Already filled
       return
   }
   pressedKey = pressedKey.toLowerCase()
 
   let row = document.getElementsByClassName("wordRow")[6 - guessesRemaining]
   let box = row.children[newLetterIndex]
   box.textContent = pressedKey
   box.classList.add("usedBox")
   currentGuess.push(pressedKey)
   newLetterIndex += 1
}
 
function removeLetter () {
   let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
   let box = row.children[nextLetter - 1]
   box.textContent = ""
   box.classList.remove("usedBox")
   currentGuess.pop()
   newLetterIndex -= 1
}
 
 
 
 
document.addEventListener("keyup", (e) => {
 
   if (guessesRemaining === 0) {
       return
   }
 
   let pressedKey = String(e.key)
   if (pressedKey === "Backspace" && newLetterIndex !== 0) {
       removeLetter()
       return
   }
 
   /* need to hook up with backend
    if (pressedKey === "Enter") {
       checkGuess()
       return
    }
   */
 
   let allowedInput= pressedKey.match(/[a-z]/gi)
   if (!allowedInput|| allowedInput.length > 1) { //stops numbers and shift/cntrl from being inputted
       return
   } else {
       addLetter(pressedKey)
   }
})
 
initBoard();
