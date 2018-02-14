function startGame(e) {
  var choice = e.target.id
  console.log(choice)
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}

var userChoice = prompt("Do you choose rock, paper or scissors?")

var compChoice = Math.random()

console.log(compChoice)

if (compChoice < 0.33) {
    compChoice = "Rock";
} else if (compChoice <=0.67) {
    compChoice = "Paper";
} else {
    compChoice = "Scissors";
}

var compare = function(userChoice,compChoice) {
  if(userChoice === compChoice) {
        return "The result is a tie!";

} else if(userChoice === "Rock") {
      if(compChoice === "Scissors") {
        return "Rock Wins!"; }
      else {
        return "Paper Wins!"; }
}

  else if(userChoice === "Paper") {
      if(compChoice === "Rock") {
        return "Paper Wins!"; }
      else {
        return "Scissors Wins!"; }
  }

  else if(userChoice === "Scissors") {
      if(compChoice === "Rock") {
        return "Rock Wins!"; }
      else {
        return "Scissors Wins!"; }
  }
}
