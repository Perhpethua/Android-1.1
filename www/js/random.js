var opcije = [
			'desna ruka zeleno',
			'lijeva ruka zeleno',
			'desna noga zeleno', 
			'lijeva noga zeleno',

			'desna ruka crveno',
			'lijeva ruka crveno',
			'desna noga crveno', 
			'lijeva noga crveno',

			'desna ruka zuto',
			'lijeva ruka zuto',
			'desna noga zuto', 
			'lijeva noga zuto',

			'desna ruka plavo',
			'lijeva ruka plavo',
			'desna noga plavo', 
			'lijeva noga plavo',

			'desna ruka zrak',
			'lijeva ruka zrak',
			'desna noga zrak',
			'lijeva noga zrak'];
var radno_polje = [
			'desna ruka zeleno',
			'lijeva ruka zeleno',
			'desna noga zeleno', 
			'lijeva noga zeleno',

			'desna ruka crveno',
			'lijeva ruka crveno',
			'desna noga crveno', 
			'lijeva noga crveno',

			'desna ruka zuto',
			'lijeva ruka zuto',
			'desna noga zuto', 
			'lijeva noga zuto',

			'desna ruka plavo',
			'lijeva ruka plavo',
			'desna noga plavo', 
			'lijeva noga plavo',

			'desna ruka zrak',
			'lijeva ruka zrak',
			'desna noga zrak',
			'lijeva noga zrak'];
			
var lr = opcije[17], //početne vrijednosti gdje je lijeva
	dr = opcije[16], // i desna ruka u zraku
	ln, dn;
var randombr;
function randomf(max){
	return Math.floor(Math.random() * max);
}
//console.log(randomf(1, 10));
//console.log(Math.floor(Math.random()*(10-1)+1));


function twist(){ //poziva je button
	provjeriUdove();
	return radno_polje[randombr];
	
//return document.querySelector('.randomf').innerHTML = radno_polje[randombr]; 
//querySelector - Get the first element in the document with named class -> '.randomf'*/
}

function provjeriUdove(){
	
	for(var i = 0; i < 20 ; i++){
		radno_polje[i] = opcije[i];
	}
	//console.log(radno_polje);
	radno_polje.splice((radno_polje.indexOf(lr)), 1);
	radno_polje.splice((radno_polje.indexOf(dr)), 1);
	if(ln != undefined){
	radno_polje.splice((radno_polje.indexOf(ln)), 1);
	}
	if(dn != undefined){
	radno_polje.splice((radno_polje.indexOf(dn)), 1);
	}
	//console.log(radno_polje);

	randombr = randomf(radno_polje.length - 1);
	while(radno_polje[randombr] == lr || radno_polje[randombr] == dr || radno_polje[randombr] == dn || radno_polje[randombr] == ln)
	{
		randombr = randomf(radno_polje.length - 1);
	}
	//console.log(radno_polje[randombr]);
	globalUdovi();
	//console.log(randombr);
}

function globalUdovi(){
	//u slucaju lijeve ruke
if(radno_polje[randombr] == opcije[1] || radno_polje[randombr] == opcije[5] || radno_polje[randombr] == opcije[9] || radno_polje[randombr] == opcije[13] || radno_polje[randombr] == opcije[17])
	{
		lr = radno_polje[randombr];
	}
//u slucaju desne ruke
	else if(radno_polje[randombr] == opcije[0] || radno_polje[randombr] == opcije[4] || radno_polje[randombr] == opcije[8] || radno_polje[randombr] == opcije[12] || radno_polje[randombr] == opcije[16])
	{
		dr = radno_polje[randombr];
	}
//u slucaju live noge
	else if(radno_polje[randombr] == opcije[3] || radno_polje[randombr] == opcije[7] || radno_polje[randombr] == opcije[11] || radno_polje[randombr] == opcije[15] || radno_polje[randombr] == opcije[19])
	{
		dn = radno_polje[randombr];
	}
//u slucaju desne noge
	else if(radno_polje[randombr] == opcije[2] || radno_polje[randombr] == opcije[6] || radno_polje[randombr] == opcije[10] || radno_polje[randombr] == opcije[14] || radno_polje[randombr] == opcije[18])
	{
		ln = radno_polje[randombr];
	}
}
