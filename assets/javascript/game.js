


/*var crystal1;
var crystal2;
var crystal3;*/


$(document).ready(function () {

    //Generate random number 
    var randomNumber = Math.floor(Math.random() * 120);
    $("#randomNumberText").html(randomNumber);
    //Generates random number for each crystal
    var crystal1 = Math.floor(Math.random() * 12)+1;
    var crystal2 = Math.floor(Math.random() * 12)+1;
    var crystal3 = Math.floor(Math.random() * 12)+1;
    //set to 0
    var totalScore = 0;
    var winsCount = 0;
    var lossesCount = 0;
    //display wins and losses
    $("#numberWins").text(winsCount);
    $("#numberLosses").text(lossesCount);

    //reset the game
    function reset() {
        randomNumber = Math.floor(Math.random() * 120);

        $("#randomNumberText").text(randomNumber);

        crystal1 = Math.floor(Math.random() * 12)+1;
        crystal2 = Math.floor(Math.random() * 12)+1;
        crystal3 = Math.floor(Math.random() * 12)+1;

        totalScore = 0;

        $("#totalScoreNum").text(totalScore);



    }

    //function tell the game what to display if win
    function checkWin() {
        winsCount++;
        $("#numberWins").text(winsCount);
        $(".colhead").append("<h2>WINNER WINNER CHICKEN DINNER!!!</h2>")
        $(".colhead h2").delay(3000).hide(3000)

        reset();

    }
    //function tell the game what to display if lose
    function checkLoss() {
        lossesCount++;
        $("#numberLosses").text(lossesCount);
        $(".colhead").append("<h2>You lose...Try again!!!</h2>")
        $(".colhead h2").delay(1000).hide(3000)

        reset();

    }
    //onclick functions for crystals 
    $("#img1").on('click', function () {
        totalScore = crystal1 + totalScore;
        $('#totalScoreNum').text(totalScore);
        //check if win or lose
        if (totalScore === randomNumber) {
            checkWin();
        } else if (totalScore > randomNumber) {
            checkLoss();
        }
    })
    $("#img2").on('click', function () {
        totalScore = crystal2 + totalScore;
        $('#totalScoreNum').text(totalScore);
        if (totalScore === randomNumber) {
            checkWin();
        } else if (totalScore > randomNumber) {
            checkLoss();
        }
    })
    $("#img3").on('click', function () {
        totalScore = crystal3 + totalScore;
        $('#totalScoreNum').text(totalScore);
        if (totalScore === randomNumber) {
            checkWin();
        } else if (totalScore > randomNumber) {
            checkLoss();
        }
    })



})