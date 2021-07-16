/**
 * Program for the 'Flip' page.
 */

/**
 * This code sets the flip functionality to 
 * the 'flipBtn'.
 */
$(document).ready(function () {
    $("#flipBtn").on("click", function () {
        $("#coinFlip").removeClass();
        setTimeout(function () {
            flipCoin();
        }, 100);
    });
});

var flipArray = ["flipTails", "flipHeads"];

/**
 * This code returns random value from the 'flipArray'.
 */
function getFlips() {
    var flip = flipArray[Math.floor(Math.random() * flipArray.length)];
    return flip;
}

/**
 * This code adds the value from 'getFlips()' resulting
 * in the css animation. Also calls out the winner through
 * 'getWinner()'.
 */
function flipCoin() {
    let flip = getFlips();
    $("#coinFlip").addClass(flip);
    var x = setTimeout(function () {
        getWinner(flip);
    }, 5150);
}

/**
 * Presents the winner by getting the input from the
 * 'player' fields and making an alert.
 * @param flip  the winning spin.
 */
function getWinner(flip) {
    var playerHeads = $("#playerHeads").val();
    var playerTails = $("#playerTails").val();
    if (flip == "flipHeads") {
        alert(playerHeads + " won!")
    } else if (flip == "flipTails") {
        alert(playerTails + " won!")
    }
}