var counter = 0;
var v = document.getElementById("myVideo");

v.play();
v.style.opacity = "100%";

function load()
{
	setInterval(loading, 1000);
	console.log("started");
}

function loading()
{
	counter = counter + 1;
	if(counter > 7)
		document.location.href = "recents.html";
}