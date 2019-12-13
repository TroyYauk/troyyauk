v = document.getElementById("myVideo");
var dur;
var count = 0;
var c = 0;
var playPause = true;
var update , update2;
var fS = false;
var pP = false;
var jS = true, tm = true;
var playing = false;
check = 0;
var speed = 7.346;
var remainder = 600;
var x = 0;
var volumeUse = 0;
var currentVolume = 1;
var min = 0;
var sec = 0;
var cc = true;
var gG = 75;
var gS = 0;
var fulOn = false;
var launch = true;

var volumeRocker = 180;
var volumeAmp = 1172.5;

function play()
{
	playing = true;
	document.getElementById("fullPlay").style.display = "none";
	document.getElementById("tlt").style.display = "none";
	v.style.opacity = "100%";
	v.play();
	playPause = true;
	document.getElementById("box").style.display = "none";
	document.body.style.backgroundColor = "black";
	document.getElementById("play").style.left = "800px";
	document.getElementById("playButton").style.left = "800px";
	document.getElementById("play").style.opacity = "0%";

	document.getElementById("pause").style.left = "300px";
	document.getElementById("pauseButton").style.left = "300px";
	document.getElementById("pause").style.opacity = "100%";
	if(tm == true)
	{
		setInterval(timeScroll, 1000);
		setInterval(disapear, 10);
	}
	tm = false;
	launch = false;
	
}

function pause()
{
	v.pause();
	pP = true;
	document.getElementById("pause").style.left = "800px";
	document.getElementById("pauseButton").style.left = "800px";
	document.getElementById("pause").style.opacity = "0%";

	document.getElementById("play").style.left = "300px";
	document.getElementById("playButton").style.left = "300px";
	document.getElementById("play").style.opacity = "100%";
	update2 = 0;
	playPause = false;
	launch = true;
}


function forward()
{
	v.currentTime = v.currentTime + 3;
	update2 = speed;
	count = count + speed;
	update2 = update;
	sec = sec + 3;
	if(sec > 59)
	{
		min = min + 1;
		sec = 0;
	}
	//remainder = remainder - 3;
	//play();
	if(launch == true)
		play();
}

function rewind()
{
	v.currentTime = v.currentTime - 3;
	update2 = speed;
	sec = sec - 3;
	if(sec < 0)
	{
		min = min - 1;
		sec = 59;
	}
	count = count - speed;
	update2 = update;
	if(launch == true)
		play();
}










function fullScreen()
{
	fulOn = true;
	if(playing == true)
	{
		fS = true;
		openFullscreen();
		document.getElementById("fullScreen").style.left = "1345px";
		document.getElementById("fullButton").style.left = "1345px";
		document.getElementById("fullScreen").style.opacity = "0%";

		document.getElementById("closeScreen").style.left = "1145px";
		document.getElementById("closeButton").style.left = "1145px";
		document.getElementById("closeScreen").style.opacity = "100%";
		if(cc = true)
			document.getElementById("warning").style.display = "block";
		cc = false;
	}
	if(playing == false)
	{
		c = c + 1;
		if(c == 3)
			c = 1;
		if(c == 1)
			document.getElementById("fullPlay").style.opacity = "100%";
		if(c == 2)
			document.getElementById("fullPlay").style.opacity = "0%";
	}
}

function closeScreen()
{
	fulOn = false;
	fS = false;
	closeFullscreen();
	document.getElementById("closeScreen").style.left = "1345px";
	document.getElementById("closeButton").style.left = "1345px";
	document.getElementById("closeScreen").style.opacity = "0%";

	document.getElementById("fullScreen").style.left = "1145px";
	document.getElementById("fullButton").style.left = "1145px";
	document.getElementById("fullScreen").style.opacity = "100%";
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
  	v.style.top = "50px";
  	v.style.width = "100%";
  	document.getElementById("hover").style.width = "100%";
  	document.getElementById("hover").style.height = "100%";
  	document.getElementById("pause").style.top = "780px";
  	document.getElementById("play").style.top = "780px";
  	document.getElementById("rewind").style.top = "780px";
  	document.getElementById("forward").style.top = "780px";
  	document.getElementById("timeline").style.top = "780px";
  	document.getElementById("timeframe").style.top = "780px";
  	document.getElementById("volume").style.top = "780px";

  	document.getElementById("pauseButton").style.top = "780px";
  	document.getElementById("playButton").style.top = "780px";
  	document.getElementById("rewindButton").style.top = "780px";
  	document.getElementById("forwardButton").style.top = "780px";
  	document.getElementById("closeScreen").style.top = "780px";
  	document.getElementById("closeButton").style.top = "780px";
  	document.getElementById("volumeButton").style.top = "780px";
  	document.getElementById("hover").style.height = "780px";


  	document.getElementById("volumeInfo").style.top = "715px";
  	document.getElementById("minus").style.top = "720px";
  	document.getElementById("plus").style.top = "720px";
  	document.getElementById("volumeLine").style.top = "742.5px";
  	document.getElementById("volumeLevelLine").style.top = "742.5px";
  	document.getElementById("volumeLevel").style.top = "735px";
  	document.getElementById("countUp").style.top = "715px";

  	document.getElementById("minusButton").style.top = "720px";
  	document.getElementById("plusButton").style.top = "720px";
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
  v.style.top = "100px";
  v.style.width = "1000px";
  document.getElementById("pause").style.top = "700px";
  	document.getElementById("play").style.top = "700px";
  	document.getElementById("rewind").style.top = "700px";
  	document.getElementById("forward").style.top = "700px";
  	document.getElementById("timeline").style.top = "700px";
  	document.getElementById("timeframe").style.top = "700px";
  	document.getElementById("volume").style.top = "700px";

  	document.getElementById("pauseButton").style.top = "700px";
  	document.getElementById("playButton").style.top = "700px";
  	document.getElementById("rewindButton").style.top = "700px";
  	document.getElementById("forwardButton").style.top = "700px";
  	document.getElementById("volumeButton").style.top = "700px";
  	document.getElementById("hover").style.height = "700px";


  	document.getElementById("volumeInfo").style.top = "635px";
  	document.getElementById("minus").style.top = "640px";
  	document.getElementById("plus").style.top = "640px";
  	document.getElementById("volumeLine").style.top = "662.5px";
  	document.getElementById("volumeLevelLine").style.top = "662.5px";
  	document.getElementById("volumeLevel").style.top = "655px";
  	document.getElementById("countUp").style.top = "635px";

  	document.getElementById("minusButton").style.top = "640px";
  	document.getElementById("plusButton").style.top = "640px";

}

function timeScroll()
{
	dur = v.duration
	update = (600/dur);
	console.log(update);
	if(playPause == true)
	{
		count = count + update;
		if(count >= 600)
		{
			document.location.href = "recents.html";
		}
		sec = sec + 1;
		if(sec > 59)
		{
			min = min + 1;
			sec = 0;
		}
		if(sec < 10)
			document.getElementById("countUp").innerHTML = min+":0"+sec;
		if(sec > 9)
			document.getElementById("countUp").innerHTML = min+":"+sec;
	}
	document.getElementById("timeframe").style.width = count+"px";

}


function disapear()
{
	if(cc == false)
	{
		gS = gS + 10;
		if(gS > 5000)
		{
			gG = gG - 1;
			console.log(gG);
			document.getElementById("warning").style.opacity = gG+"%";
		}
	}
}



function hover()
{
	check = check + 1;
	if(check == 3)
		check = 1;
	console.log(check);
	showHide();
}

function showHide()
{
	if(fulOn == true)
	{
	if(check == 1)
	{
		document.getElementById("play").style.opacity = "0%";
		document.getElementById("pause").style.opacity = "0%";
		document.getElementById("forward").style.opacity = "0%";
		document.getElementById("rewind").style.opacity = "0%";
		document.getElementById("timeline").style.opacity = "0%";
		document.getElementById("timeframe").style.opacity = "0%";
		document.getElementById("closeScreen").style.opacity = "0%";
		document.getElementById("volume").style.opacity = "0%";
		document.getElementById("return").style.opacity = "0%";
		document.getElementById('nocursor').style.cursor = "none";
		document.getElementById("countUp").style.opacity = "0%";
	}
	if(check == 2)
	{
		document.getElementById("play").style.opacity = "100%";
		document.getElementById("pause").style.opacity = "100%";
		document.getElementById("forward").style.opacity = "100%";
		document.getElementById("rewind").style.opacity = "100%";
		document.getElementById("timeline").style.opacity = "100%";
		document.getElementById("timeframe").style.opacity = "100%";
		document.getElementById("closeScreen").style.opacity = "100%";
		document.getElementById("volume").style.opacity = "100%";
		document.getElementById("return").style.opacity = "100%";
		document.getElementById('nocursor').style.cursor = 'block';
		document.getElementById("countUp").style.opacity = "100%";
	}
}
}

function volume()
{
	volumeUse = volumeUse + 1;
	if(volumeUse == 3)
		volumeUse = 1;
	if(volumeUse == 1)
	{
		document.getElementById("volumeInfo").style.opacity = "100%";
		document.getElementById("minus").style.opacity = "100%";
		document.getElementById("plus").style.opacity = "100%";
		document.getElementById("volumeLine").style.opacity = "100%";
		document.getElementById("volumeLevelLine").style.opacity = "100%";
		document.getElementById("volumeLevel").style.opacity = "100%";
	}
	if(volumeUse == 2)
	{
		document.getElementById("volumeInfo").style.opacity = "0%";
		document.getElementById("minus").style.opacity = "0%";
		document.getElementById("plus").style.opacity = "0%";
		document.getElementById("volumeLine").style.opacity = "0%";
		document.getElementById("volumeLevelLine").style.opacity = "0%";
		document.getElementById("volumeLevel").style.opacity = "0%";
	}
}

function minus()
{
	currentVolume = currentVolume - 0.1;
	if(currentVolume < 0.1)
		currentVolume = 0;

	v.volume = currentVolume;
	console.log(v.volume);

	volumeRocker = volumeRocker - 16.36;
	volumeAmp = volumeAmp - 16.36;
	if(volumeRocker < 16.5)
	{
		volumeRocker = 16.4;
		volumeAmp = 1008.9;
	}
	document.getElementById("volumeLevelLine").style.width = volumeRocker+"px";
	document.getElementById("volumeLevel").style.left = volumeAmp+"px";

	if(currentVolume < 0.1)
	{
		document.getElementById("volume").src = "images/icons/mute.png";
	}
	if(currentVolume > 0.2 && currentVolume < 0.3)
	{
		document.getElementById("volume").src = "images/icons/volume_1.png";
	}
	if(currentVolume > 0.5 && currentVolume < 0.6)
	{
		document.getElementById("volume").src = "images/icons/volume_2.png";
	}
	if(currentVolume > 0.7 && currentVolume < 0.8)
	{
		document.getElementById("volume").src = "images/icons/volume_2.png";
	}
}

function plus()
{
	currentVolume = currentVolume + 0.1;
	if(currentVolume > 0.9)
		currentVolume = 1;
	v.volume = currentVolume;
	console.log(v.volume);
	
	volumeRocker = volumeRocker + 16.36;
	volumeAmp = volumeAmp + 16.36;
	if(volumeRocker > 179)
	{
		volumeRocker = 180;
		volumeAmp = 1172.5;
	}
	document.getElementById("volumeLevelLine").style.width = volumeRocker+"px";
	document.getElementById("volumeLevel").style.left = volumeAmp+"px";

	if(currentVolume > 0.2 && currentVolume < 0.3)
	{
		document.getElementById("volume").src = "images/icons/volume_1.png";
	}
	if(currentVolume > 0.5 && currentVolume < 0.6)
	{
		document.getElementById("volume").src = "images/icons/volume_2.png";
	}
	if(currentVolume > 0.7 && currentVolume < 0.8)
	{
		document.getElementById("volume").src = "images/icons/volume_2.png";
	}

	if(currentVolume > 0.9)
	{
		document.getElementById("volume").src = "images/icons/volume_3.png";
	}
}











