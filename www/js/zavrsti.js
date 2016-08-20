var degrees = 0;
var looper, privremena, temp, vari = 0;
var elem1, elem2, elem3, elem4, lijruk, desruk, lijnog, desnog, boja, bc;
var poljeElemenata;
var rez = '';

var mymedia = null;

function ide(){
	//console.log("usli");
	document.getElementById("back").style.display = "none";
	document.body.style.backgroundColor = "#484848";//changes color when spinning
	elem1 = document.getElementById("zuta");//zuta
	elem2 = document.getElementById("crvena");//crvena
	elem3 = document.getElementById("plava");//plava
	elem4 = document.getElementById("zelena");//zelena
	lijruk = document.getElementById("lijr");//lijeva ruka
	desruk = document.getElementById("desr");//desna ruka
	lijnog = document.getElementById("ln");//lijeva noga
	desnog = document.getElementById("dn");//desna noga
	botun = document.getElementById("botunt");
	rez = document.getElementById("result"); 

	var setspeed = 2; 
	poljeElemenata = [elem1, elem2, elem3, elem4, desruk, lijruk, desnog, lijnog];
	//console.log(poljeElemenata);
	sviraj();
	rotateAnimation(setspeed);
}
/*=========== MEDIA AND AUDIO MUSC - MOBILE AND PC ==========================================*/	
function sviraj(){
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){ //MOBILE
		isReady(); //media.js
	}else{ //PC
		var song = new Audio(); //new Audio instance
		song.src = "audio/2.mp3";
		song.play();
	}
}
/*===========================ROTIRANJE ELEMENATA===========================*/
function rotateAnimation(setspeed){
	
	if(navigator.userAgent.match("Chrome")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.WebkitTransform = "rotate("+degrees+"deg)";
			if(poljeElemenata[i] == lijruk || poljeElemenata[i] == elem2){//lijeva ruka i crvena (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "100% 100%";
			}else if(poljeElemenata[i] == desruk || poljeElemenata[i] == elem4){//desna ruka i zelena (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "0% 100%";
			}else if(poljeElemenata[i] == lijnog || poljeElemenata[i] == elem1){//lijeva noga i zuta (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "100% 0%";
			}else if(poljeElemenata[i] == desnog || poljeElemenata[i] == elem3){//desna noga i plava (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "0% 0%";
			}
		}
	} else if(navigator.userAgent.match("Firefox")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.MozTransform = "rotate("+degrees+"deg)";
		
			if(poljeElemenata[i] == lijruk || poljeElemenata[i] == elem2){//lijeva ruka i crvena (na istoj su strani)
				poljeElemenata[i].style.MozTransformOrigin = "100% 100%";
			}else if(poljeElemenata[i] == desruk || poljeElemenata[i] == elem4){//desna ruka i zelena (na istoj su strani)
				poljeElemenata[i].style.MozTransformOrigin = "0% 100%";
			}else if(poljeElemenata[i] == lijnog || poljeElemenata[i] == elem1){//lijeva noga i zuta (na istoj su strani)
				poljeElemenata[i].style.MozTransformOrigin = "100% 0%";
			}else if(poljeElemenata[i] == desnog || poljeElemenata[i] == elem3){//desna noga i plava (na istoj su strani)
				poljeElemenata[i].style.MozTransformOrigin = "0% 0%";
			}
		}
	} else if(navigator.userAgent.match("MSIE")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.msTransform = "rotate("+degrees+"deg)";
			
			if(poljeElemenata[i] == lijruk || poljeElemenata[i] == elem2){//lijeva ruka i crvena (na istoj su strani)
				poljeElemenata[i].style.msTransformOrigin = "100% 100%";
			}else if(poljeElemenata[i] == desruk || poljeElemenata[i] == elem4){//desna ruka i zelena (na istoj su strani)
				poljeElemenata[i].style.msTransformOrigin = "0% 100%";
			}else if(poljeElemenata[i] == lijnog || poljeElemenata[i] == elem1){//lijeva noga i zuta (na istoj su strani)
				poljeElemenata[i].style.msTransformOrigin = "100% 0%";
			}else if(poljeElemenata[i] == desnog || poljeElemenata[i] == elem3){//desna noga i plava (na istoj su strani)
				poljeElemenata[i].style.msTransformOrigin = "0% 0%";
			}
		}
	} else if(navigator.userAgent.match("Opera")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.OTransform = "rotate("+degrees+"deg)";
			if(poljeElemenata[i] == lijruk || poljeElemenata[i] == elem2){//lijeva ruka i crvena (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "100% 100%";
			}else if(poljeElemenata[i] == desruk || poljeElemenata[i] == elem4){//desna ruka i zelena (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "0% 100%";
			}else if(poljeElemenata[i] == lijnog || poljeElemenata[i] == elem1){//lijeva noga i zuta (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "100% 0%";
			}else if(poljeElemenata[i] == desnog || poljeElemenata[i] == elem3){//desna noga i plava (na istoj su strani)
				poljeElemenata[i].style.webkitTransformOrigin = "0% 0%";
			}
		}
	}else{
		var i = 0;
		for( i; i < poljeElemenata.length; i++){
			poljeElemenata[i].style.transform = "rotate("+degrees+"deg)";
			
			if(poljeElemenata[i] == lijruk || poljeElemenata[i] == elem2){//lijeva ruka i crvena (na istoj su strani)
				poljeElemenata[i].style.transformOrigin = "100% 100%";
			}else if(poljeElemenata[i] == desruk || poljeElemenata[i] == elem4){//desna ruka i zelena (na istoj su strani)
				poljeElemenata[i].style.transformOrigin = "0% 100%";
			}else if(poljeElemenata[i] == lijnog || poljeElemenata[i] == elem1){//lijeva noga i zuta (na istoj su strani)
				poljeElemenata[i].style.transformOrigin = "100% 0%";
			}else if(poljeElemenata[i] == desnog || poljeElemenata[i] == elem3){//desna noga i plava (na istoj su strani)
				poljeElemenata[i].style.transformOrigin = "0% 0%";
			}
		}
	}
	
		
	looper = setTimeout('rotateAnimation('+setspeed+')',setspeed);
	degrees++;

	if(degrees == 361){
		clearTimeout(looper);
		degrees = 0;
		//staPise();
		//console.log(poljeElemenata);
		uvecajSmanji();
	}
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
		//prikazi();
		//funkc uvecaj/smanji
		//dohvati string iz fun prikazi()
		//provjeri da li se radi o boji ili rukama i nogama
		//funk koja rezultat iz prikazi stavlja u varijabl -> korisit global
		
//funkcija animira slike ovisno o dobivenom rezultatu		
function uvecajSmanji(){
	staPise();
	var i = 0;
	//console.log(poljeElemenata);
	for(i; i < poljeElemenata.length ; i++){
		//console.log(poljeElemenata[i]);
		if((poljeElemenata[i] != temp) && (poljeElemenata[i] != privremena)){
			if(navigator.userAgent.match("Chrome")){
				poljeElemenata[i].style.WebkitTransform = "scale("+vari+")"; //Chrome
			}else if(navigator.userAgent.match("Firefox")){
				poljeElemenata[i].style.MozTransform = "scale("+vari+")"; //Firefox
			}else if(navigator.userAgent.match("MSIE")){
				poljeElemenata[i].style.msTransform = "scale("+vari+")"; //MSIE
			}else if(navigator.userAgent.match("Opera")){
				poljeElemenata[i].style.OTransform = "scale("+vari+")"; //Opera
			}else{
				poljeElemenata[i].style.transform = "scale("+vari+")"; //default
			}	
		}
	}
}
//funkcija cita string dobivenog rezultata random funkcije
//i postavlja rezultat u privremene varijable
		
function staPise(){
	String = twist();
	//console.log(radno_polje[randombr]);
	//document.getElementById("myTextarea").value = radno_polje[randombr]; //prikazuje text u text area
	var div = document.getElementById("textResult");
    div.textContent = radno_polje[randombr];
    var text = div.textContent;

	if(String.indexOf("zeleno") > -1){//postavljanje boja u varijablu privremena
		privremena = elem4;
		document.getElementById('bodyw').style.backgroundImage = "url('img/greenc.jpg')";//green
	}else if(String.indexOf("zuto") > -1){
		privremena = elem1;
		document.getElementById('bodyw').style.backgroundImage = "url('img/yellowc.jpg')";//yellow
	}else if(String.indexOf("crveno") > -1){
		privremena = elem2; 
		document.getElementById('bodyw').style.backgroundImage = "url('img/redc.jpg')";//red
	}else if(String.indexOf("plavo") > -1){
		privremena = elem3;
		document.getElementById('bodyw').style.backgroundImage = "url('img/bluec.jpg')";//blue
	}else if(String.indexOf("zrak") > -1){
		privremena = 0;
		document.getElementById('bodyw').style.backgroundImage = "url('img/whitec.jpg')"; //white
	}
  
	if(String.indexOf("desna ruka") > -1){// postavljanje nogu i ruku u temp varijablu
		temp = desruk;
	}else if(String.indexOf("lijeva ruka") > -1){
		temp = lijruk;
	}else if(String.indexOf("desna noga") > -1){
		temp = desnog;
	}else if(String.indexOf("lijeva noga") > -1){
		temp = lijnog;
	}
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/		
		