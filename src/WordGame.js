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
   let row = document.getElementsByClassName("wordRow")[6 - guessesRemaining]
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
 
 
function shadeKeyBoard(letter, color) {
   for (const elem of document.getElementsByClassName("keyButton")) {
       if (elem.textContent === letter) {
           let oldColor = elem.style.backgroundColor
           if (oldColor === 'green') {
               return
           }
 
           if (oldColor === 'yellow' && color !== 'green') {
               return
           }
 
           elem.style.backgroundColor = color
           break
       }
   }
}
 
 
 
 
//Checking the guess ******** Long code chunk
 
function checkGuess () {
   let row = document.getElementsByClassName("wordRow")[6 - guessesRemaining]
   let guessWord = ''
   let Answer= Array.from(AnswerWord)
 
   for (const val of currentGuess) {
       guessWord += val
   }
 
   if (guessString.length != 5)
       return;
  
 
   if (!WORDS.includes(guessWord)) {
       alert("Is not a word")
       return
   }
 
  
   for (let i = 0; i < 5; i++) {
       let letterColor = ''
       let box = row.children[i]
       let letter = currentGuess[i]
      
       let letterPlace = Answer.indexOf(currentGuess[i])
       // is letter in the correct guess
       if (letterPlace === -1) { //Not even in the word
           letterColor = 'grey'
       } else {
           // letter in word
           // if letter index and right guess index are the same
           // letter is in the right position
           if (currentGuess[i] === rightGuess[i]) {
               letterColor = 'green'
           } else {
               // Right letter, wrong place
               letterColor = 'yellow'
           }
 
           rightGuess[letterPlace] = "!"
       }
 
       let delay = 150 * i
       setTimeout(()=> {
           //shade box
           box.style.backgroundColor = letterColor
           shadeKeyBoard(letter, letterColor)
       }, delay)
   }
 
   if (guessWord === Answer) {
       alert("That is correct")
       guessesRemaining = 0
       return
   } else {
       guessesRemaining -= 1;
       currentGuess = [];
       nextLetter = 0;
 
       if (guessesRemaining === 0) {
           alert(`The word was: "${Answer}"`)
       }
   }
}
 
initBoard();
