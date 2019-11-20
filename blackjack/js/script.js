var playerCards = 0;
var cardSelection;
var dealerCards = 0;
var suite;
var i = 31;
var gamePlay = true;
var adCards = 1;
var evaluate = false;

function deal ()
{
	cards();
	setInterval(addVal, 1000);

}

function addVal()
{
	if(gamePlay == true)
		i = i - 1;
	if(gamePlay == false)
		i = i - 0;
	if(i < 1)
	{
		gamePlay = false;
		document.getElementById("result").innerHTML = "TIME'S UP";
		document.getElementById("result").style.left = "525px";		
		document.getElementById("result").style.opacity = "100%";
		document.getElementById("reset").style.opacity = "100%";
		document.getElementById("reset").style.top = "375px";

	}
	if(i > 9)
		document.getElementById("timer").innerHTML = "0:"+i;

	if(i < 10)
	{
		document.getElementById("timer").innerHTML = "0:0"+i;
		if(i%2 == 0)
			document.getElementById("timer").style.color = "brown";
		if(i%2 != 0)
			document.getElementById("timer").style.color = "red";
	}
	document.getElementById("timer").style.opacity = "100%";
}

function hit ()
{
	addCards();
	document.getElementById("buttonDesign1").style.opacity = "0%";
	document.getElementById("buttonDesign2").style.top =  "240px";
	document.getElementById("buttonDesign2").style.opacity = "100%";
	document.getElementById("buttonDesign2").style.left = "-80px";

	document.getElementById("playerOne").style.left = "500px";
	document.getElementById("playerTwo").style.left = "650px";
	document.getElementById("hitting").style.left = "800px";

	if(playerCards > 21)
	{
		document.getElementById("result").innerHTML = "BUSTED";
		document.getElementById("result").style.left = "500px";		
		document.getElementById("result").style.opacity = "100%";
		dealer2();
		document.getElementById("reset").style.opacity = "100%";
		document.getElementById("reset").style.top = "375px";

	}
	i = 31;
}

function hit2()
{
	addCards2();
	if(playerCards > 21)
	{
		document.getElementById("result").innerHTML = "BUSTED";
		document.getElementById("result").style.left = "500px";		
		document.getElementById("result").style.opacity = "100%";
		dealer2();
		document.getElementById("reset").style.opacity = "100%";
		document.getElementById("reset").style.top = "375px";

	}

	document.getElementById("playerOne").style.left = "420px";
	document.getElementById("playerTwo").style.left = "570px";
	document.getElementById("hitting").style.left = "720px";
	document.getElementById("hitting2").style.left = "870px";

	gamePlay = false;
}


function stay()
{
	dealer2();
	if(dealerCards < 17)
		dealerAdding();
	else
		gameOver();

}

function gameOver()
{
	if(dealerCards > playerCards || dealerCards == playerCards)
	{
		if(dealerCards < 22)
		{
			document.getElementById("result").innerHTML = "YOU LOOSE";
			document.getElementById("result").style.left = "525px";		
			document.getElementById("result").style.opacity = "100%";
		}
	}
	if(dealerCards < playerCards || (dealerCards > 21 && playerCards < 22))
	{
		if(playerCards < 22)
		{
			document.getElementById("result").innerHTML = "YOU WIN";
			document.getElementById("result").style.left = "510px";		
			document.getElementById("result").style.opacity = "100%";
		}
	}

	document.getElementById("reset").style.opacity = "100%";
	document.getElementById("reset").style.top = "375px";
}

function restart()
{
	location.reload();
}







function cards ()
{
	player1();
	player2();
	dealer1();
	console.log(playerCards);
}

function player1 ()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);
	
	if(cardSelection == 2)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/10.png";
	if(cardSelection == 11)
		document.getElementById("playerOne").src = "images/cards/"+suite+"/a.png";

	playerCards = playerCards + cardSelection;
}

function player2()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);

	if(cardSelection == 1 && playerCards > 10)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/10.png";
	if(cardSelection == 11 && playerCards < 11)
		document.getElementById("playerTwo").src = "images/cards/"+suite+"/a.png";

	playerCards = playerCards + cardSelection;
}

function dealer1()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);

	if(cardSelection == 1)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/10.png";
	if(cardSelection == 11)
		document.getElementById("dealerOne").src = "images/cards/"+suite+"/a.png";


	dealerCards = dealerCards + cardSelection;
	
}

function dealer2()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);

	if(cardSelection == 1)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/10.png";
	if(cardSelection == 11)
		document.getElementById("dealerTwo").src = "images/cards/"+suite+"/a.png";

	dealerCards = dealerCards + cardSelection;
	evaluate = true;
	/*if(dealerCards < 16)*/
		dealerAdding();
}

function addCards()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);

	if(cardSelection == 1)
		document.getElementById("hitting").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("hitting").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("hitting").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("hitting").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("hitting").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("hitting").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("hitting").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("hitting").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("hitting").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("hitting").src = "images/cards/"+suite+"/10.png";

	playerCards = playerCards + cardSelection;
	adCards++;
}




function addCards2()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);

	if(cardSelection == 1)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("hitting2").src = "images/cards/"+suite+"/10.png";

	playerCards = playerCards + cardSelection;
}





function dealerAdding()
{
	cardSelection = Math.random() * (11 - 1) + 1;
	cardSelection = Math.round(cardSelection);
	console.log(cardSelection)
	suite = Math.random() * (4 - 1) + 1;
	suite = Math.round(suite);
	
	if(cardSelection == 1)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/a.png";
	if(cardSelection == 2)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/2.png";
	if(cardSelection == 3)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/3.png";
	if(cardSelection == 4)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/4.png";
	if(cardSelection == 5)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/5.png";
	if(cardSelection == 6)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/6.png";
	if(cardSelection == 7)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/7.png";
	if(cardSelection == 8)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/8.png";
	if(cardSelection == 9)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/9.png";
	if(cardSelection == 10)
		document.getElementById("dealerThree").src = "images/cards/"+suite+"/10.png";

	dealerCards = dealerCards + cardSelection;

	document.getElementById("dealerOne").style.left = "0px";
	document.getElementById("dealerTwo").style.left = "0px";
	document.getElementById("dealerThree").style.left = "0px";

	gameOver();
}












