var pOne = document.getElementById("placeholder");
var pTwo = document.getElementById("placeholder2");
var Results = document.getElementById("results");
var container = document.getElementById("container");
var gameOver = document.getElementById("end");
var pOneTurn = false;
var pTwoTurn = false;
var pOneTime = 0;
var pTwoTime = 0;
var playerTwoInterval = null;
var playerOneInterval = null;
var GameHasBeenStarted = false;
var pOneTurnTimes = [];
var pTwoTurnTimes = [];

pOne.innerHTML = "Player One Time Time: " + pOneTime;
pTwo.innerHTML = "Player Two Time Time: " + pTwoTime;

function StartGame(event)
{
    if(GameHasBeenStarted == false)
    {
        GameHasBeenStarted = true;
        playerOneInterval = setInterval(function ()
        {
            ++pOneTime;
            pOne.innerHTML = "Player One Time Time: " + pOneTime;
        }, 1000);
        pOneTurn = true;
        pTwoTurn = false;
        pOneTurnTimes = [{"Turn Time: ": pOneTime}];
    }
    else{
        if(pOneTurn == true)
        {
            clearInterval(playerOneInterval);
            playerTwoInterval = setInterval(function ()
            {
                ++pTwoTime;
                pTwo.innerHTML = "Player Two Time Time: " + pTwoTime;
            }, 1000);
            pOneTurn = false;
            pTwoTurn = true;
            pTwoTurnTimes = [{"Turn Time: ": pTwoTime}];
        } else{
            clearInterval(playerTwoInterval);
            playerOneInterval = setInterval(function ()
            {
                ++pOneTime;
                pOne.innerHTML = "Player One Time Time: " + pOneTime;
            }, 1000);
            pOneTurn = true;
            pTwoTurn = false;
            pOneTurnTimes = [{"Turn Time: ": pOneTime}];
        }
    }
}

function StopGame()
{
    clearInterval(playerOneInterval);
    clearInterval(playerTwoInterval);
}

function GetResults()
{
  window.location.href = "http://localhost:3000/api/turns";
}

container.addEventListener("click", StartGame, false);
gameOver.addEventListener("click", StopGame, false);
Results.addEventListener("click", GetResults, false);
