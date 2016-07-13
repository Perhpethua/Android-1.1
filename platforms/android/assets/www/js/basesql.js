
document.addEventListener("deviceready", OnDeviceReady, false);
window.onload=function(){
    document.getElementById("submitbtn").addEventListener ("click", getplayers, false);
    document.getElementById("subb").addEventListener("click", getRecords, false);
}
var db, clickable = true;
var imena = [null, null, null, null, null, null, null, null];

function OnDeviceReady() {
    alert("device is ready!");

    makeDB();
    clickable = true;
}
function openDB()
{
    return window.openDatabase('playerDB', "1.0", "Default", 200000);
}
function makeDB(){ // otvaranje baze
//({imebaze, lokacija, za koristenje built-in Andorid db klasa, workaround that simply closes and reopens the database file at the end of every transaction that is committed})
    db = openDB();
    db.transaction(fillDB, errorcb, successcb);

    alert("User: makeDB");

}
function fillDB(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text)'); 
}
function successcb(){
    alert("DB created Successfully!");    
    //fillDB();
}
function errorcb(){
    alert("Can't add player into DataBase!");
    db.close(); // ako je doslo do greske zatvori bazu
}
function unesi(tx)
{ // funkcija upisuje podatke u tablicu

    db = openDB();
    
    alert("instert into table p1 p2");


    var queri = 'INSERT INTO player (name) VALUES ("'+imena[0]+'")';
    db.transaction(function (tx){
        tx.executeSql(queri, [], defaultsuccess, defaultfault);
    }, transactionfault, transactionsucces);

    var queri1 = 'INSERT INTO player (name) VALUES ("'+imena[1]+'")';
    db.transaction(function (tx){
        tx.executeSql(queri1, [], defaultsuccess, defaultfault);
    }, transactionfault, transactionsucces);
}

    //otvoristr();

function defaultsuccess(){
    alert("default success");
}
function defaultfault(error){
    alert("default pogreska: " + error);
}
function transactionsucces(){
    alert("Transaction success");
}
function transactionfault(){
    alert("Transaction fault");
}
function otvoristr(){ // funckija otvara wheel.html 
    
    window.location.assign("wheel.html"); //works on android
}

function getRecords(){
    db = openDB();
    alert("getRecords");
    db.transaction(function (tx){
        tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);
    }, transactionfault, transactionsucces );
}
function getRecSuccess(){
    alert("getRecSuccess");
}

function resultSuccess(tx, response){
    alert("Response : " + response);
    var div = document.getElementById("divResponse");
    var temp = "<table><tr><th>name</th></tr></table>";

    alert(response.rows.length); //4
    for (var i = 0; i < response.rows.length; i++) {
        //append all strings
        temp += "<button>" + response.rows.item(i).name+"</button>";
        alert(temp);
    }
    div.innerHTML = temp;
}
function resultError(error){
    alert("greska e: " + error);
}



function getplayers(){
    if(!clickable)return;
    var names = ["playersname1",
                "playersname2",
                "playersname3",
                "playersname4",
                "playersname5",
                "playersname6",
                "playersname7",
                "playersname8" ]
    for(var i = 0; i < 8; i++){
        imena[i] = document.getElementById(names[i]).value;
    }
    
        //alert(pname1);
    if(imena[0]=="" || imena[1]==""){
        //alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
    }
}
