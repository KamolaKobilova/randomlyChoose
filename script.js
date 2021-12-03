// how to win
  var rock  = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var btn = document.getElementById('btn')
  var audio = document.getElementById('sound')

  rock.addEventListener('click', function(){
    const ww = document.getElementById('ww')
    ww.innerHTML = ` <li id="handUp" class="class1"><img src="./assets/rock.png"><br></li> `
})
paper.addEventListener('click', function(){
    const ww = document.getElementById('ww')
    ww.innerHTML = ` <li id="handDown" class="class1"><img src="./assets/paper.png"><br></li> `
})
scissors.addEventListener('click', function(){
    const ww = document.getElementById('ww')
    ww.innerHTML = ` <li id="scissors" class="class1"><img src="./assets/scissors.png"><br></li> `
})
////
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('li')
let userChoice
let computerChoice
let result

// computerChoiceDisplay.addEventListener('click', function(){
//   const comp = document.querySelector('.comp')
//   comp.innerHTML = ` <li id="handUp" class="class"><img src="./assets/paper.png"><br></li> `
// } )
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  // if (randomNumber === 'rock') {
  //   computerChoice = `<h4>rock</h4><li id="rock" class="com"><img src="./assets/rock.png"><br>`
  // }
  // if (randomNumber === 'paper') {
  //   computerChoice = `<li id="scissors" class="com"><img src="./assets/scissors.png">`
  // }
  // if (randomNumber === 'scissors') {
  //   computerChoice = `<li id="paper" class="com"><img src="./assets/paper.png">`
  // }
  // computerChoiceDisplay.innerHTML = computerChoice }
// }


  if (randomNumber === 1) {
    computerChoice = `<h4><li id="rock" class="com"><img src="./assets/rock.png"></h4>`
  }
  if (randomNumber === 2) {
    computerChoice =  `<h4></h4><li id="paper" class="com"><img src="./assets/paper.png"></h4>`
  }
  if (randomNumber === 3) {
    computerChoice = `<h4></h4><li id="scissors" class="com"><img src="./assets/scissors.png"></h4>`
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
  // if (randomNumber === 'rock') {
  //   computerChoice =  `<h4>rock</h4><li id="rock" class="com"><img src="./assets/rock.png"><br>`
  // }
  // if (randomNumber === 'paper') {
  //   computerChoice = `<li id="scissors" class="com"><img src="./assets/scissors.png">`
  // }
  // if (randomNumber === 'scissors') {
  //   computerChoice = `<li id="paper" class="com"><img src="./assets/paper.png">`
  // }
  // computerChoiceDisplay.innerHTML = computerChoice 


function getResult() {
  if (computerChoice === `<h4><li id="rock" class="com"><img src="./assets/rock.png"></h4>` && userChoice === "scissors") {
    result = 'you lose!'
  }
  if (computerChoice === `<h4><li id="rock" class="com"><img src="./assets/rock.png"></h4>` && userChoice === "rock") {
    result = 'it\'s a draw!'
  }
  if (computerChoice ===  `<h4><li id="rock" class="com"><img src="./assets/rock.png"></h4>` && userChoice === "paper") {
    result = 'you lose!'
  }
  if (computerChoice ===  `<h4><li id="rock" class="com"><img src="./assets/rock.png"></h4>` && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === ` <h4></h4><li id="paper" class="com"><img src="./assets/paper.png"></h4>` && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === ` <h4></h4><li id="paper" class="com"><img src="./assets/paper.png"></h4>` && userChoice === "paper") {
    result = 'it\'s a draw!'
  }
  if (computerChoice === ` <h4></h4><li id="paper" class="com"><img src="./assets/paper.png"></h4>` && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === `<h4></h4><li id="scissors" class="com"><img src="./assets/scissors.png"></h4>` && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === `<h4></h4><li id="scissors" class="com"><img src="./assets/scissors.png"></h4>` && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}

function sound(){
  audio.play()
}