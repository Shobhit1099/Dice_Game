var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var arrayNumber = [1, 2, 3, 4, 5, 6];
var arrayImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
for(var i = 0; i<6; i++){
	if(randomNumber1 === arrayNumber[i])
		document.querySelectorAll("img")[0].setAttribute("src", arrayImg[i]);
}

for(var i = 0; i<6; i++){
	if(randomNumber2 === arrayNumber[i])
		document.querySelectorAll("img")[1].setAttribute("src", arrayImg[i]);
}

console.log(document.querySelectorAll("h1")[0]);
var x = document.querySelectorAll("h1")[0];

if(randomNumber1 === randomNumber2){
	x.innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
	x.innerHTML = "Player 1 Wins";
}
else{
	x.innerHTML = "Player 2 Wins";	
}