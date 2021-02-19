var canvas = document.getElementById("diceRoll");
var ctx = canvas.getContext("2d");

function rollDice() { 
document.getElementById('diceRoll').style.border = '2px solid black';
document.getElementById('diceRoll').style.background = 'white';
ctx.clearRect(0, 0, canvas.width, canvas.height);
generatedNumber = Math.floor((Math.random() * 6) + 1); document.getElementById("rollResult").innerHTML = "You rolled a " + generatedNumber;

// Switch statement that uses the generated number to determine which draw function to execute
switch(generatedNumber) {
  case 1:
    drawOne();
    break;
  case 2:
    drawTwo();
    break;
  case 3:
    drawThree();
    break;
  case 4:
    drawFour();
    break;
  case 5:
    drawFive();
    break
  case 6:
    drawSix();
    break
  default:
    // code block
}
}

function drawOne() {
// Draws one black dot in the center
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawTwo() {
  // Draws a black dot on the top left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
  // Draws a black dot on the bottom right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawThree() {
  // Draws a black dot on the top left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot in the center
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
  // Draws a black dot on the bottom right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawFour() {
// Draws one black dot on the top left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the bottom left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the top right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the bottom right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawFive() {
// Draws one black dot on the top left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the bottom left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the top right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the bottom right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
  // Draws one black dot in the center
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawSix() {
// Draws one black dot on the top left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the bottom left
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the top right
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 4, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the left center
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
  // Draws one black dot in the center
    ctx.beginPath();
    ctx.arc(canvas.width / 4, canvas.height / 2, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
// Draws one black dot on the right center
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 1.33, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
  // Draws one black dot in the center
    ctx.beginPath();
    ctx.arc(canvas.width / 1.33, canvas.height / 2, 13, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
}

