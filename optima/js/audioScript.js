var onOff = true;

function darkMode()
{
	if(onOff == true)
	{
		document.body.style.backgroundColor = "black";

		document.getElementById("sD").style.color = "white";
		document.getElementById("sS").style.color = "white";
		document.getElementById("dD").style.color = "white";
		document.getElementById("darkMode").style.left = "1000px";
		document.getElementById("darkMode").style.opacity = "0%";
		document.getElementById("darkButton").style.left = "1000px";
		document.getElementById("darkModeOff").style.opacity = "100%";
		document.getElementById("darkModeOff").style.left = "520px";
		document.getElementById("darkButtonOff").style.left = "520px";
		document.getElementById("timeline").style.backgroundColor = "grey";
		document.getElementById("timecode").style.backgroundColor = "white";

  		document.getElementsByTagName("a")[0].setAttribute("class", "democlass"); 
  		document.getElementsByTagName("a")[1].setAttribute("class", "democlass"); 
  		document.getElementsByTagName("a")[2].setAttribute("class", "democlass"); 
	}
}

function darkModeOff()
{
	if(onOff == true)
	{
		document.body.style.backgroundColor = "white";
		document.getElementById("sD").style.color = "black";
		document.getElementById("sS").style.color = "black";
		document.getElementById("dD").style.color = "black";
		document.getElementById("darkMode").style.left = "520px";
		document.getElementById("darkMode").style.opacity = "100%";
		document.getElementById("darkButton").style.left = "520px";
		document.getElementById("darkModeOff").style.opacity = "0%";
		document.getElementById("darkModeOff").style.left = "1000px";
		document.getElementById("darkButtonOff").style.left = "1000px";
		document.getElementById("timeline").style.backgroundColor = "lightgrey";
		document.getElementById("timecode").style.backgroundColor = "black";

		document.getElementsByTagName("a")[0].setAttribute("class", "democlas"); 
  		document.getElementsByTagName("a")[1].setAttribute("class", "democlas"); 
  		document.getElementsByTagName("a")[2].setAttribute("class", "democlas"); 
	}
}






