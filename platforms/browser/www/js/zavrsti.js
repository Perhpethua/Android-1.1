var degrees = 0;
var looper, poljeElemenata, privremena, temp, vari = 0;
var elem1, elem2, elem3, elem4, lijruk, desruk, lijnog, desnog, boja, bc;
var setspeed;
//var rez = null;

/*var bleep = new Audio(); //new Audio instance
bleep.src = "audio/2.mp3";
*/

function ide(e1, e2, e3, e4, e5, e6, e7, e8, speed){
	console.log("usli");
	document.body.style.backgroundColor = "#484848";//changes color when spinning
	elem1 = document.getElementById(e1);//zuta
	elem2 = document.getElementById(e2);//crvena
	elem3 = document.getElementById(e3);//plava
	elem4 = document.getElementById(e4);//zelena
	lijruk = document.getElementById(e5);//lijeva ruka
	desruk = document.getElementById(e6);//desna ruka
	lijnog = document.getElementById(e7);//lijeva noga
	desnog = document.getElementById(e8);//desna noga
	var botun = document.getElementById('botunt');
//	rez = document.getElementById(rezultat); //DODANO 18.4
	setspeed = speed;
	/*===============================sadded sound on button twist*/
	
	/*var mymedia = new Media("audio/2.mp3");
	mymedia.play();*/

	//bleep.play();
	/*-----------------------------*/
	poljeElemenata = [elem1, elem2, elem3, elem4, desruk, lijruk, desnog, lijnog];
	console.log(poljeElemenata);
	rotateAnimation(setspeed);
}
/*======================================added sound effect*/

/*function playAudio(){

	var mymedia = new Media("audio/2.mp3");
	mymedia.play();

	var song = new Audio(); //new Audio instance
	song.src = "audio/2.mp3";
	song.play();

	/*if(navigator.userAgent.match(/Android/i)){
		var song = new Media("audio/2.mp3");
		song.play();
		//stop after 3 sec
		stopAudio();
	}else{
		var song = new Audio(); //new Audio instance
		song.src = "audio/2.mp3";
		song.play();
	}
	//poziv function stopAudio
}*/

/*function stopAudio(){
	if (song) {
		setTimeout(function(){
			song.stop();}, 3000);
		}
	};*/
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
		staPise();
		console.log(poljeElemenata);
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
	console.log(poljeElemenata);
	for(i; i < poljeElemenata.length ; i++){
		console.log(poljeElemenata[i]);
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
	String = prikazi();
	console.log(poljeElemenata);

	//rez.value= radno_polje[randombr];//DODANO 18.4

	if(String.indexOf("zeleno") > 0){//postavljanje boja u varijablu privremena
		privremena = elem4;
		document.body.style.backgroundImage = "url('img/greenc.jpg')";//green
	}else if(String.indexOf("zuto") > 0){
		privremena = elem1;
		document.body.style.backgroundImage = "url('img/yellowc.jpg')";//yellow
	}else if(String.indexOf("crveno") > 0){
		privremena = elem2; 
		document.body.style.backgroundImage = "url('img/redc.jpg')";//red
	}else if(String.indexOf("plavo") > 0){
		privremena = elem3;
		document.body.style.backgroundImage = "url('img/bluec.jpg')";//blue
	}else if(String.indexOf("zrak") > 0){
		privremena = 0;
		document.body.style.backgroundImage = "url('img/whitec.jpg')"; //white
	}
  
	if(String.indexOf("desna ruka") > 0){// postavljanje nogu i ruku u temp varijablu
		temp = desruk;
	}else if(String.indexOf("lijeva ruka") > 0){
		temp = lijruk;
	}else if(String.indexOf("desna noga") > 0){
		temp = desnog;
	}else if(String.indexOf("lijeva noga") > 0){
		temp = lijnog;
	}
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/		
		