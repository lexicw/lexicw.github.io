// initialize variables and select the correct elements on the page
let canvas = document.getElementById("img-canvas");
let imgInput = document.getElementById("img-input");
let fontSize;
let fontColor;
let topText = document.getElementById("top-txt");
let bottomText = document.getElementById("bottom-txt");
let topTextSize = document.getElementById("top-text-size");
let bottomTextSize = document.getElementById("bottom-text-size");
let ctx = canvas.getContext('2d');
canvas.width = canvas.height = 0;


function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Jockey One';
    ctx.fillStyle = document.getElementById("top-color").value;
    ctx.lineWidth = fontSize / 20;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Jockey One';
    ctx.fillStyle = document.getElementById("bottom-color").value;
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

// Adds Event Listener to "Download" button, allowing the user to download the Meme
document.getElementById("download").addEventListener("click", function() {
  image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-meme.png";
  link.href = image;
  link.click();
});


// Adds Event Listener to "Clear" button, clearing the image
document.getElementById("clear").addEventListener("click", function() {
  // Gets rid of image size
  canvas.width = 0;
  canvas.height = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("top-color").value = "#FFFFFF";
  document.getElementById("bottom-color").value = "#FFFFFF";
  document.getElementById("top-txt").value = "";
  document.getElementById("bottom-txt").value = "";
  document.getElementById("top-text-size").value = 0.15;
  document.getElementById("bottom-text-size").value = 0.15;
  document.getElementById("img-input").value = "";

});

function initialize () {
console.log("Entering initialize()....");

// Adds Event Listener to "Generate" button, allowing the Meme to be generated
document.getElementById("generate").addEventListener("click", function() {
    try {
      document.getElementById("error-msg").innerHTML = "";
      // Read image as DataURL using the FileReader API
      let reader = new FileReader();

        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            img.onload = function(){
            generateMeme(img, topText.value, bottomText.value, topTextSize.value, bottomTextSize.value);
            };
        };

      reader.readAsDataURL(imgInput.files[0]);
    }
    catch(err) {
      document.getElementById("error-msg").innerHTML = "Please upload an image.";
    }

});


}

initialize();
