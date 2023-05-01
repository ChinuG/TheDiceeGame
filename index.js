// First image👇
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Second image👇
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// var image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomDiceImage2);


// Who Own

// if player 1 wins.
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// if player 2nd wins.
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
// if tie between them.
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}