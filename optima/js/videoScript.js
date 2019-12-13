var v = document.getElementById("myVideo");
var x = document.getElementById("curTime");
var y = document.getElementById("curTimeScroll");
var z = document.getElementById("scroll");
var pp = true;
var count = -650;
var countB = true;
//var countVar = 5;
var countVar = (v.duration/1300);
var length = 1300;
var reset = v.duration;

var dur = 5;
var star = false;
//var xPos = event.clientX;

function backReturn()
{
	document.location.href = "index.html";
	console.log("return");
}

function play()
{

	countVar = (length/(v.duration));

	setInterval(timer, 1000);
		v.play();
		document.getElementById("play").style.left = "1000px";
		document.getElementById("pause").style.left = "655px";
		document.getElementById("play").style.opacity = "0%";
		document.getElementById("pause").style.opacity = "100%";

		document.getElementById("playButton").style.left = "1000px";
		document.getElementById("pauseButton").style.left = "655px";
		openFullscreen();
		star = true;
}

function pause()
{
		v.pause();
		document.getElementById("pause").style.left = "1000px";
		document.getElementById("play").style.left = "655px";
		document.getElementById("pause").style.opacity = "0%";
		document.getElementById("play").style.opacity = "100%";

		document.getElementById("pauseButton").style.left = "1000px";
		document.getElementById("playButton").style.left = "655px";
		count = count;
		countVar = 0;
		star = false;
}

function forward()
{
	v.currentTime = v.currentTime + 3;
	count = count + ((v.duration/1300)*3);
	dur = dur + 50;
}

function rewind()
{
	v.currentTime = v.currentTime - 3;
	count = count - 50;
	dur = dur - 50;
}

function timer()
{
	count = count + countVar;
	console.log(count);
	dur = dur + countVar;
	x.style.left = count+"px";
	//x.style.left = ((v.currentTime)-650)+"px";
	y.style.width = dur+"px";
	if(count >= 650)
	{
		count = -650;
		document.location.href = "index.html";
	}

}


function checkPosition()
{
	var yPos = event.clientY;
	var xPos = event.clientX;
	//console.log(yPos)
	if((yPos > 50 && yPos < 800 && xPos > 100)||(yPos < 50 && xPos > 0 && xPos < 125))
	{
		x.style.opacity = "100%";
		y.style.opacity = "100%";
		z.style.opacity = "100%";
		document.getElementById("cover").style.top = "-300px";
		//document.getElementById("cover").style.opacity = "0%";
		document.getElementById("back").style.opacity = "100%";
		document.getElementById("forward").style.opacity = "100%";
		document.getElementById("rewind").style.opacity = "100%";
	}else
	{
		x.style.opacity = "0%";
		y.style.opacity = "0%";
		z.style.opacity = "0%";
		document.getElementById("cover").style.top = "-140px";
		//document.getElementById("cover").style.opacity = "100%";
		document.getElementById("back").style.opacity = "0%";
		document.getElementById("forward").style.opacity = "0%";
		document.getElementById("rewind").style.opacity = "0%";
	}
	if(star == true && (yPos > 50 && yPos < 800 && xPos > 100)||(yPos < 50 && xPos > 0 && xPos < 125))
	{
		document.getElementById("pause").style.opacity = "100%";
	}else
	{
		document.getElementById("pause").style.opacity = "0%";
		
	}
}

var elem = document.documentElement;

function openFullscreen() {
  	if (elem.requestFullscreen) {
    	elem.requestFullscreen();
  	} else if (elem.mozRequestFullScreen) { /* Firefox */
    	elem.mozRequestFullScreen();
  	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    	elem.webkitRequestFullscreen();
  	} else if (elem.msRequestFullscreen) { /* IE/Edge */
    	elem.msRequestFullscreen();
  	}
  	v.style.position = "relative";
  	v.style.top = "50px";
}













