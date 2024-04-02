// Dice 1
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomImg1 = "images/dice" +  randomNumber1 + ".png";

var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", randomImg1);

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImg2 = "images/dice" +  randomNumber2 + ".png";

var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", randomImg2);

// Let's Roll

var heading = document.querySelector("h1");
if(randomNumber1> randomNumber2){
    heading.innerHTML = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){

    heading.innerHTML ="Player 2 Wins!";
}else{
    heading.innerHTML="It's a Draw!";
}