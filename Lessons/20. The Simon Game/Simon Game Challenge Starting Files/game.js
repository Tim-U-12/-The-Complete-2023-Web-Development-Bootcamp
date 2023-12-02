var started = false
var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    playSound(randomChosenColour)
    animatePress(randomChosenColour)
}

function flash(colourID) {
    $("#" + colourID).fadeOut(200).fadeIn(200)
}

function playSound(colourID) {
    switch (colourID) {
        case 'red':
            var redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break
        
        case 'blue':
            var blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();
            break

        case 'green':
            var greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break
        
        case 'yellow':
            var yellowSound = new Audio("./sounds/yellow.mp3");
            yellowSound.play();
            break
            
        default:
            var wrongSound = new Audio("./sounds/wrong.mp3");
            wrongSound.play();
    }
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed")
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed")
    }, 100)
}

function updateLevelTitle() {
    $("#level-title").text("Level "+ gamePattern.length)
}

function resetGame() {
    $("#level-title").text("Game Over, Press Any Key to Restart")
    // reset patterns
    gamePattern = []
    userClickedPattern = []
    started = false
}

function gameOverBackground() {
    $("body").addClass("game-over")
    setTimeout(function() {
        $("body").removeClass("game-over")
    }, 200)
}

$(document).keypress(function(event){
    if (started === false) {
        nextSequence()
        updateLevelTitle()
        started = true
    }
})


$(".btn").click(function(){
    var userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    if (gamePattern[userClickedPattern.length - 1] != userClickedPattern[userClickedPattern.length - 1]) {
        playSound("wrong")
        animatePress(userChosenColour)
        gameOverBackground()
        resetGame()
    } else {
        playSound(userChosenColour)
        animatePress(userChosenColour)
    }

    // if they're at the end of the list
    if (gamePattern.length === userClickedPattern.length) {
        nextSequence()
        updateLevelTitle()
    }
})


