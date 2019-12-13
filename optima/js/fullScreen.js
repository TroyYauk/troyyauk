var a = document.getElementById("artwork");
var cc = 0;
function fullScreen()
{
	if(fullS == true)
	{
		openFullscreen();
		document.getElementById("fullScreen").style.left = "800px";
		document.getElementById("fullButton").style.left = "800px";
		document.getElementById("fullScreen").style.opacity = "0%";

		document.getElementById("closeScreen").style.left = "975px";
		document.getElementById("closeButton").style.left = "975px";
		document.getElementById("closeScreen").style.opacity = "100%";

		darkModeOff();
		document.getElementById("darkMode").style.opacity = "0%";
		document.getElementById("volume").style.opacity = "0%";
		document.getElementById("skip").style.opacity = "0%";
		document.getElementById("pause").style.opacity = "0%";
		document.getElementById("previous").style.opacity = "0%";
		document.getElementById("timeline").style.opacity = "0%";
		document.getElementById("timecode").style.opacity = "0%";
		document.getElementById("fB").style.display = "block";
		document.getElementById("return").style.display = "none";
	}
	else
	{
		cc = cc + 1;
		if(cc == 3)
			cc = 1;
		if(cc == 1)
			document.getElementById("warning").style.display = "block";
		if(cc == 2)
			document.getElementById("warning").style.display = "none";
	}

}

function closeScreen()
{
	closeFullscreen();
	document.getElementById("fullScreen").style.left = "440px";
	document.getElementById("fullButton").style.left = "440px";
	document.getElementById("fullScreen").style.opacity = "100%";

	document.getElementById("closeScreen").style.left = "800px";
	document.getElementById("closeButton").style.left = "800px";
	document.getElementById("closeScreen").style.opacity = "0%";

	document.getElementById("darkMode").style.opacity = "100%";
	document.getElementById("volume").style.opacity = "100%";
	document.getElementById("skip").style.opacity = "100%";
	document.getElementById("pause").style.opacity = "100%";
	document.getElementById("previous").style.opacity = "100%";
	document.getElementById("timeline").style.opacity = "100%";
	document.getElementById("timecode").style.opacity = "100%";
	document.getElementById("fB").style.display = "none";
	document.getElementById("return").style.display = "block";
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
  document.getElementById("artwork").style.left = "250px";
  document.getElementById("artwork").style.top = "-50px";
  document.getElementById("artwork").style.width = "900px";
  document.getElementById("fullTime").style.opacity = "100%";
  document.getElementById("fullTimeCode").style.opacity = "100%";

  document.getElementById("volumeInfo").style.opacity = "0%"
	document.getElementById("minus").style.opacity = "0%"
	document.getElementById("plus").style.opacity = "0%"
	document.getElementById("volumeLine").style.opacity = "0%"
	document.getElementById("volumeLineLevel").style.opacity = "0%"
	document.getElementById("volumeLevel").style.opacity = "0%"
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }


  document.getElementById("artwork").style.left = "17.5px";
  document.getElementById("artwork").style.top = "25px";
  document.getElementById("artwork").style.width = "600px";
  document.getElementById("fullTime").style.opacity = "0%";
  document.getElementById("fullTimeCode").style.opacity = "0%";

}







