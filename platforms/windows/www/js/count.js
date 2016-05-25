var pisi;
function countDown(sec, elem){

	var element = document.getElementById(elem);
	pisi = element.innerHTML = "Start in: " +sec+ "s";
	
	console.log(element);
	if(sec < 1){
		console.log("sec<1");
		pisi = element.innerHTML = "Twisting ...";
		clearTimeout(timer);
	}
	sec--;
	var timer = setTimeout('countDown('+sec+', "'+elem+'")', 1000);
}