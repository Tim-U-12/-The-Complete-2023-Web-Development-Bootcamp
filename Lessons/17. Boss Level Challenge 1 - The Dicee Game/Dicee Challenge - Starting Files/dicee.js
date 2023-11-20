function rolldie(sides) {
    return Math.floor(Math.random() * sides) + 1
}


var die1 = rolldie(6)
var die2 = rolldie(6)
document.querySelector(".img1").setAttribute("src", "./images/dice" + die1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + die2 + ".png");

if (die1 > die2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!"
} else if (die1 < die2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!"
} else {
    document.querySelector(".container h1").textContent = "Draw!"
}

