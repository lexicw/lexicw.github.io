let cardsFlipped = 0;
let firstCard = "";
let secondCard = "";
let numTurns = 0;
let gameRunning = false;

$("document").ready(function() {
  let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]; // Initialize Cards Array

$("#shuffle").click(function() { // Randomly shuffles the cards
      numTurns = 0;
      cardsFlipped = 0;
      let cardElements = "";
      for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      for(i = 0; i < cards.length; i++) { // Generates the html and classes for the cards
      cardElements += '<div class="card"><div class="front card-'+cards[i]+'">'+cards[i]+'</div><div class="back"></div></div>';
    }
      $("#turns").html("Number of turns: " + numTurns);
      $("#card-div").html(cardElements);

});

   });
// Function that executes when one of the cards is clicked
$(document).on('click','.card',function(){

    if (cardsFlipped == 0 && !$(this).hasClass("flipped") && gameRunning === false) {

        gameRunning = true;

        // flip first card
        $(this).toggleClass('flipped');
        $(this).one('transitionend',function() {
            firstCard = $(this).children().attr('class').split(' ')[1];
            cardsFlipped = 1;
            gameRunning = false;
        })

    }

    if (cardsFlipped == 1 && !$(this).hasClass("flipped") && gameRunning === false) {

        gameRunning = true;

        // flip second card
        $(this).toggleClass('flipped');
        $(this).one('transitionend',function() {

            secondCard = $(this).children().attr('class').split(' ')[1];
            cardsFlipped = 2;

            // evaluate
            numTurns = numTurns + 1;
            $("#turns").html("Number of turns: " + numTurns);
            if (firstCard.valueOf() === secondCard.valueOf()) {
                $('.flipped').addClass("matched");
            } else if (firstCard != secondCard) {
                $("div .card").removeClass("flipped");
            }

            cardsFlipped = 0;
            gameRunning = false;
        })
    }
});
