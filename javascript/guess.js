/**
 * Program for the 'guess' game.
 */

/**
 * This code sets the functionalite for starting
 * a game and showing the answer to 'guessBtn' and
 * 'answerBtn'.
 */
$(document).ready(function () {
    $("#guessBtn").on("click", function () {
        var coins = $("#guessInput").val();
        createArray(coins);
    });

    $("#answerBtn").on("click", function () {
        showAnswer();
    })
});

/**
 * Switches a number 1 or 0 to 
 * 1 or 0 respectively.
 * @param number    the number to switch
 */
function flip(number) {
    return (number == 0) ? 1 : 0;
}

/**
 * Returns the amount of flips needed to get an
 * alternating sequence of 1s and 0s in an array
 * with a starting number of either 1 or 0.
 * @param numberArr   array of 1s and 0s to be alternating
 * @param startingNo   the starting number.
 */
function getFlipsWithStartingNumber(numberArr, startingNo) {
    let flips = 0;
    for (i = 0; i < numberArr.length; i++) {
        if (numberArr[i] != startingNo) {
            flips++;
        }
        startingNo = flip(startingNo);
    }
    return flips;
}

/**
 * Returns the smaller amount of flips needed to get an array of
 * alternating 1s and 0s with starting number 1 vs 0.
 * @param numberArr     the array of 1s and 0s to be compared.
 */
function leastAmountOfFlips(numberArr) {
    return (Math.min(getFlipsWithStartingNumber(numberArr, 1), getFlipsWithStartingNumber(numberArr, 0)));
}

var coinArray;

/**
 * Sets the gamearray 'coinArray' to the user length of the user input
 * and adds a css coin for 1 respectively 0 matching the array.
 * @param coins     the amount of coins to be generated.
 */
function createArray(coins) {
    coinArray = new Array();
    $("#coinFlipDiv").empty();
    for (i = 0; i < coins; i++) {
        coinArray.push(Math.floor(Math.round(Math.random())));
        if (coinArray[i] == 1) {
            $("#coinFlipDiv").append("<div class='coinImg'><div id=" + "coin" + i + "  class='coinFlipHead'></div></div>")
        } else {
            $("#coinFlipDiv").append("<div class='coinImg'><div id=" + "coin" + i + " class='coinFlipTail'></div></div>")
        }
    }
}

var answer;

/**
 * shows the correct answer of minimum amount of flips and
 * updates the visual coin sequence with 'replaceArray()'.
 */
function showAnswer() {
    answer = leastAmountOfFlips(coinArray);
    console.log(answer);
    alert(answer);
    let one = getFlipsWithStartingNumber(coinArray, 1);
    let zero = getFlipsWithStartingNumber(coinArray, 0);
    if (one < zero) {
        replaceArray(coinArray, 1);
    } else {
        replaceArray(coinArray, 0);
    }
}

/**
 * Updates the visual coin array with the starting number.
 * @param numberArr     the coin array of 1s and 0s.
 * @param startingNo    the the correct starting number.
 */
function replaceArray(numberArr, startingNo) {
    for (i = 0; i < numberArr.length; i++) {
        if (numberArr[i] != startingNo) {
            if (numberArr[i] == 1) {
                $("#coin" + i).addClass("coinFlipTail").removeClass("coinFlipHead");
            }
            else {
                $("#coin" + i).addClass("coinFlipHead").removeClass("coinFlipTail");
            }
        }
        startingNo = flip(startingNo);
    }
}