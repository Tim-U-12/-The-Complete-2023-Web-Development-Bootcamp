var started = false
var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()]

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
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


// flash(gamePattern[gamePattern.length - 1])
// playSound(gamePattern[gamePattern.length - 1])
$(document).keypress(function(event){
    if (started === false) {
        gamePattern.push(randomChosenColour)
    nextSequence()
    }
})


$(".btn").click(function(){
    var userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    console.log(userClickedPattern)
})


