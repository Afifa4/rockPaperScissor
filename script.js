// Scores and rounds tracking
let humanScore = 0;
let computerScore = 0;
let round = 0;

// Get computer choice
const getComputerChoice = function () {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "paper";
  }
};

// Get human choice with validation
const getHumanChoice = function () {
  let humanChoice = prompt("Your move: Rock, Paper, or Scissors?");
  if (humanChoice === null) {
    return null;
  }
  humanChoice = humanChoice.toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];
  while (!validChoices.includes(humanChoice)) {
    humanChoice = prompt(
      "Invalid choice! Please enter Rock, Paper, or Scissors:"
    );
    if (humanChoice === null) {
      return null;
    }
    humanChoice = humanChoice.toLowerCase();
  }
  return humanChoice;
};

// Play a single round
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }
  if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "rock" && humanChoice === "scissors")
  ) {
    computerScore += 1;
    return `lose`;
  } else {
    humanScore += 1;
    return `win`;
  }
};

// Play the game
function playGame() {
  console.log("Starting a new game of Rock, Paper, Scissors!");

  while (round < 5) {
    const humanChoice = getHumanChoice();
    if (humanChoice === null) {
      console.log("Game stopped by the user.");
      return;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(
      `Round ${
        round + 1
      }: You chose ${humanChoice}, Computer chose ${computerChoice}.`
    );

    if (result === "tie") {
      console.log("Result: It's a tie!");
    } else if (result === "win") {
      console.log("Result: You win this round!");
    } else {
      console.log("Result: You lose this round.");
    }

    round += 1;
  }

  console.log("Game Over!");
  console.log(`Final Scores: You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations, you win the game! 🎉");
  } else if (humanScore < computerScore) {
    console.log("Better luck next time, the computer wins! 🤖");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
