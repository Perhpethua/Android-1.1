var degrees = 0;
var looper, poljeElemenata, privremena, temp, vari = 0, String;
var elem1, elem2, elem3, elem4, lijruk, desruk, lijnog, desnog, boja, bc;

function ide(e1, e2, e3, e4, e5, e6, e7, e8, speed){
	document.body.style.backgroundColor = "blue";
	elem1 = document.getElementById(e1);//zuta
	elem2 = document.getElementById(e2);//crvena
	elem3 = document.getElementById(e3);//plava
	elem4 = document.getElementById(e4);//zelena
	lijruk = document.getElementById(e5);//lijeva ruka
	desruk = document.getElementById(e6);//desna ruka
	desnog = document.getElementById(e7);//lijeva noga
	lijnog = document.getElementById(e8);//desna noga
	
	poljeElemenata = [elem1, elem2, elem3, elem4, desruk, lijruk, desnog, lijnog];
	console.log(poljeElemenata);
	rotateAnimation(speed);
}
function rotateAnimation(speed){
	
	if(navigator.userAgent.match("Chrome")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.WebkitTransform = "rotate("+degrees+"deg)";
		}
	} else if(navigator.userAgent.match("Firefox")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.MozTransform = "rotate("+degrees+"deg)";
		}
	} else if(navigator.userAgent.match("MSIE")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.msTransform = "rotate("+degrees+"deg)";
		}
	} else if(navigator.userAgent.match("Opera")){
		var i = 0;
		for (i; i < poljeElemenata.length ; i++){
			poljeElemenata[i].style.OTransform = "rotate("+degrees+"deg)";
		}

	}else{
		var i = 0;
		for( i; i < poljeElemenata.length; i++){
			poljeElemenata[i].style.transform = "rotate("+degrees+"deg)";
		}
	}
			
	looper = setTimeout('rotateAnimation('+speed+')',speed);
	degrees++;

	if(degrees == 361){
		clearTimeout(looper);
		degrees = 0;
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
				poljeElemenata[i].style.transform = "scale("+vari+")";
			}
				
		}
	}
}
//funkcija cita string dobivenog rezultata random funkcije
//i postavlja rezultat u privremene varijable
		
function staPise(){
	String = prikazi();
	console.log(poljeElemenata);

	if(String.indexOf("zeleno") > 0){//postavljanje boja u varijablu privremena
		privremena = elem4;
		document.body.style.backgroundColor = "green";
	}else if(String.indexOf("zuto") > 0){
		privremena = elem1;
		document.body.style.backgroundColor = "yellow";
	}else if(String.indexOf("crveno") > 0){
		privremena = elem2; 
		document.body.style.backgroundColor = "red";
	}else if(String.indexOf("plavo") > 0){
		privremena = elem3;
		document.body.style.backgroundColor = "blue";
	}else if(String.indexOf("zrak") > 0){
		privremena = 0;
		document.body.style.backgroundColor = "white";
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
		









