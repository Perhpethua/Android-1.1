var auto, autoSpin = 0;

function automaticSpin(){
	document.getElementById("autospin").style.display = "none";
	if(autoSpin == 0){
		auto = setInterval(ide, 5000);
		countDown(5, "counter"); //count.js
		autoSpin = 1;
	}
}

function stopSpin(){
	clearInterval(auto);
	autoSpin = 0;
}