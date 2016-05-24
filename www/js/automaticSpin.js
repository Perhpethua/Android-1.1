var auto;

function automaticSpin(){
	auto = setInterval(ide, 5000);
	countDown(5, "counter");
}

function stopSpin(){
	clearInterval(auto);
}