var a = document.getElementById("myAudio");

a.addEventListener("loadeddata", function() {
 	console.log("Audio data loaded");
 	console.log("Audio duration: " + this.duration);
 	dur = (this.duration);
});
		
var currentSong = 1;
var counter = 0, fullCounter = 0;
var update;
var fullUpdate;
var playPau = true;
var dur;
var playPause = true;
var launch = true;
var vCount = 0;
var currentVolume = 1;
var volumeRocker = 180;
var volumeAmp = 428;
var changeS = true;
var songInfo;
var fullS = false;
var looch = true;

var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

		function randomSetList()
		{
			s1 = Math.floor(Math.random(1) * 10);

			s2 = Math.floor(Math.random(1) * 10);
			while(s2 == s1)
				s2 = Math.floor(Math.random(1) * 10);

			s3 = Math.floor(Math.random(1) * 10);
			while(s3 == s1 || s3 == s2)
				s3 = Math.floor(Math.random(1) * 10);

			s4 = Math.floor(Math.random(1) * 10);
			while(s4 == s1 || s4 == s2 || s4 == s3)
				s4 = Math.floor(Math.random(1) * 10);

			s4 = Math.floor(Math.random(1) * 10);
			while(s4 == s1 || s4 == s2 || s4 == s3)
				s4 = Math.floor(Math.random(1) * 10);

			s5 = Math.floor(Math.random(1) * 10);
			while(s5 == s1 || s5 == s2 || s5 == s3 || s5 == s4)
				s5 = Math.floor(Math.random(1) * 10);

			s6 = Math.floor(Math.random(1) * 10);
			while(s6 == s1 || s6 == s2 || s6 == s3 || s6 == s4 || s6 == s5)
				s6 = Math.floor(Math.random(1) * 10);

			s7 = Math.floor(Math.random(1) * 10);
			while(s7 == s1 || s7 == s2 || s7 == s3 || s7 == s4 || s7 == s5 ||
				s7 == s6)
				s7 = Math.floor(Math.random(1) * 10);

			s8 = Math.floor(Math.random(1) * 10);
			while(s8 == s1 || s8 == s2 || s8 == s3 || s8 == s4 || s8 == s5 ||
				s8 == s6 || s8 == s7)
				s8 = Math.floor(Math.random(1) * 10);

			s9 = Math.floor(Math.random(1) * 10);
			while(s9 == s1 || s9 == s2 || s9 == s3 || s9 == s4 || s9 == s5 ||
				s9 == s6 || s9 == s7 || s9 == s8)
				s9 = Math.floor(Math.random(1) * 10);

			s10 = Math.floor(Math.random(1) * 10);
			while(s10 == s1 || s10 == s2 || s10 == s3 || s10 == s4 || s10 == s5 ||
				s10 == s6 || s10 == s7 || s10 == s8 || s10 == s9)
				s10 = Math.floor(Math.random(1) * 10);

			s1++;
			s2++;
			s3++;
			s4++;
			s5++;
			s6++;
			s7++;
			s8++;
			s9++;
			s10++;
		}
		

function play()
{
	if(launch == true)
	{
		randomSetList();
		console.log(s1+", "+s2+", "+s3+", "+s4+", "+s5+", "+s6+
			", "+s7+", "+s8+", "+s9+", "+s10)
		songSelection();
		shuffleInfo();
		setInterval(changeSong, 1000);
	}

	launch = false;

	if(changeS == true)
				dur = a.duration;
	changeS = false;
			
	console.log(dur);
	a.play();
	playPau = true;
	playPause = true;
	document.getElementById("play").style.left = "620px";
	document.getElementById("playButton").style.left = "620px";
	document.getElementById("play").style.opacity = "0%";

	document.getElementById("pause").style.left = "200px";
	document.getElementById("pauseButton").style.left = "200px";
	document.getElementById("pause").style.opacity = "100%";

	fullS = true;
	looch = false;
	document.getElementById("warning").style.display = "none";
}

function pause()
{
	a.pause();
	playPau = false;
	playPause = false;
	document.getElementById("play").style.left = "200px";
	document.getElementById("playButton").style.left = "200px";
	document.getElementById("play").style.opacity = "100%";

	document.getElementById("pause").style.left = "620px";
	document.getElementById("pauseButton").style.left = "620px";
	document.getElementById("pause").style.opacity = "0%";
	fullS = false;
	cc = 0;
	looch = true;
}

function skip()
{
	currentSong = currentSong + 1;
	if(currentSong > 10)
		document.location.href = "songs.html";
	songSelection();
	shuffleInfo();
	changeS = true;
	play();
	counter = 0;
	fullCounter = 0;
	if(looch == true)
		play();
}

function previous()
{
	currentSong = currentSong - 1;
	if(currentSong < 1)
		document.location.href = "songs.html";
	songSelection();
	shuffleInfo();
	play();
	counter = 0;
	fullCounter = 0;
	if(looch == true)
		play();
}

function changeSong()
{
	//dur = a.duration;
	update = (475/dur);
	fullUpdate = (620/dur);
			
	if(playPause == true)
	{
		counter = counter + update;
		fullCounter = fullCounter + fullUpdate;
		if(counter > 474)
		{
			currentSong = currentSong + 1;
			if(currentSong > 10)
				document.location.href = "songs.html";
			songSelection();
			shuffleInfo();
			a.play();
			counter = 0;
			fullCounter = 0;

		}
	}
	document.getElementById("fullTimeCode").style.width = fullCounter+"px"
	document.getElementById("timecode").style.width = counter+"px";
}































function songSelection()
{
	if(currentSong == 1)
	{
		a.src = "optimaTV/music/songs/audio_"+s1+".mp3";
		songInfo = s1;
	}
	if(currentSong == 2)
	{
		a.src = "optimaTV/music/songs/audio_"+s2+".mp3";
		songInfo = s2;
	}
	if(currentSong == 3)
	{
		a.src = "optimaTV/music/songs/audio_"+s3+".mp3";
		songInfo = s3;
	}
	if(currentSong == 4)
	{
		a.src = "optimaTV/music/songs/audio_"+s4+".mp3";
		songInfo = s4;
	}
	if(currentSong == 5)
	{
		a.src = "optimaTV/music/songs/audio_"+s5+".mp3";
		songInfo = s5;
	}
	if(currentSong == 6)
	{
		a.src = "optimaTV/music/songs/audio_"+s6+".mp3";
		songInfo = s6;
	}
	if(currentSong == 7)
	{
		a.src = "optimaTV/music/songs/audio_"+s7+".mp3";
		songInfo = s7;
	}
	if(currentSong == 8)
	{
		a.src = "optimaTV/music/songs/audio_"+s8+".mp3";
		songInfo = s8;
	}
	if(currentSong == 9)
	{
		a.src = "optimaTV/music/songs/audio_"+s9+".mp3";
		songInfo = s9;
	}
	if(currentSong == 10)
	{
		a.src = "optimaTV/music/songs/audio_"+s10+".mp3";
		songInfo = s10;
	}
}

function shuffleInfo()
{
	if(songInfo == 1)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_1.png";
		document.getElementById("sD").innerHTML = "Bohemian Rhapsody"
		document.getElementById("dD").innerHTML = "Queen"
	}
	if(songInfo == 2)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_2.png";
		document.getElementById("sD").innerHTML = "Crystal Dolphin"
		document.getElementById("dD").innerHTML = "Engelwood"
	}
	if(songInfo == 3)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_3.png";
		document.getElementById("sD").innerHTML = "Don't Let The Sun Go Down On Me"
		document.getElementById("dD").innerHTML = "George Michael & Stevie Wonder"
	}
	if(songInfo == 4)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_4.png";
		document.getElementById("sD").innerHTML = "Ebony & Ivory"
		document.getElementById("dD").innerHTML = "Paul McCartney & Stevie Wonder"
	}
	if(songInfo == 5)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_5.png";
		document.getElementById("sD").innerHTML = "Harvest Moon"
		document.getElementById("dD").innerHTML = "Neil Young"

	}
	if(songInfo == 6)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_6.png";
		document.getElementById("sD").innerHTML = "Rio"
		document.getElementById("dD").innerHTML = "Duran Duran"
	}
	if(songInfo == 7)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_7.png";
		document.getElementById("sD").innerHTML = "Sir Duke"
		document.getElementById("dD").innerHTML = "Stevie Wonder"
	}
	if(songInfo == 8)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_8.png";
		document.getElementById("sD").innerHTML = "Slip Away"
		document.getElementById("dD").innerHTML = "Perfume Genius"
	}
	if(songInfo == 9)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_9.png";
		document.getElementById("sD").innerHTML = "Spirit Of The Radio"
		document.getElementById("dD").innerHTML = "Rush"
	}
	if(songInfo == 10)
	{
		document.getElementById("artwork").src = "images/songArtwork/image_9.png";
		document.getElementById("sD").innerHTML = "Tom Sawyer"
		document.getElementById("dD").innerHTML = "Rush"
	}
}





















































function volume()
		{
			vCount = vCount + 1;
			if(vCount == 3)
				vCount = 1;
			if(vCount == 1)
			{
				document.getElementById("volumeInfo").style.opacity = "100%"
				document.getElementById("minus").style.opacity = "100%"
				document.getElementById("plus").style.opacity = "100%"
				document.getElementById("volumeLine").style.opacity = "100%"
				document.getElementById("volumeLineLevel").style.opacity = "100%"
				document.getElementById("volumeLevel").style.opacity = "100%"
			}
			if(vCount == 2)
			{
				document.getElementById("volumeInfo").style.opacity = "0%"
				document.getElementById("minus").style.opacity = "0%"
				document.getElementById("plus").style.opacity = "0%"
				document.getElementById("volumeLine").style.opacity = "0%"
				document.getElementById("volumeLineLevel").style.opacity = "0%"
				document.getElementById("volumeLevel").style.opacity = "0%"
			}
		}

		function minus()
		{
			currentVolume = currentVolume - 0.1;
			a.volume = currentVolume;

			if(currentVolume < 0.1)
				currentVolume = 0;
			a.volume = currentVolume;

			volumeRocker = volumeRocker - 16.36;
			volumeAmp = volumeAmp - 16.36;

			if(volumeRocker < 16.5)
			{
				volumeRocker = 0;
				volumeAmp = 267.5;
			}
			volumeIcon();

			document.getElementById("volumeLineLevel").style.width = volumeRocker+"px";
			document.getElementById("volumeLevel").style.left = volumeAmp+"px";
		}

		function plus()
		{
			currentVolume = currentVolume + 0.1;
			if(currentVolume > 0.9)
				currentVolume = 1;
			a.volume = currentVolume;

			volumeRocker = volumeRocker + 16.36;
			volumeAmp = volumeAmp + 16.36;

			if(volumeRocker > 179)
			{
				volumeRocker = 180;
				volumeAmp = 428.5;
			}
			volumeIcon();

			document.getElementById("volumeLineLevel").style.width = volumeRocker+"px";
			document.getElementById("volumeLevel").style.left = volumeAmp+"px";
		}

		function volumeIcon()
		{
			if(currentVolume < 0.1)
				document.getElementById("volume").src = "images/icons/mute.png";
			if(currentVolume > 0.2 && currentVolume < 0.3)
				document.getElementById("volume").src = "images/icons/volume_1.png";
			if(currentVolume > 0.7 && currentVolume < 0.8)
				document.getElementById("volume").src = "images/icons/volume_2.png";
			if(currentVolume > 0.8)
				document.getElementById("volume").src = "images/icons/volume_3.png";
		}

