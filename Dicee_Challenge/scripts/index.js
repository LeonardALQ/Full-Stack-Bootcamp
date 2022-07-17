function throwDice() { 
  return Math.floor(Math.random() * 6) + 1; 
}

function getDiceImage(num) { 
  let imageSrc = "images/dice" + num + ".png"; 
  return imageSrc;
}

let player1Score = throwDice(); 
let player2Score = throwDice();  

if (player1Score > player2Score) { 
  document.querySelector("h1").textContent = "Player 1 Wins"; 
} else if (player1Score == player2Score) { 
  document.querySelector("h1").textContent = "Draw!";
} else { 
  document.querySelector("h1").textContent = "Player 2 Wins"; 
}

document.querySelector(".img1").setAttribute("src", getDiceImage(player1Score));
document.querySelector(".img2").setAttribute("src", getDiceImage(player2Score));
