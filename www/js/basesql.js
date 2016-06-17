document.addEventListener("deviceready", OnDeviceReady, false);
document.getElementById ("submitbtn").addEventListener ("click", getplayers, false);

var db, tx;
var pname1, 
    pname2, 
    pname3, 
    pname4, 
    pname5, 
    pname6, 
    pname7, 
    pname8;
function OnDeviceReady() {
    alert("device is ready!");
//    window.sqlitePlugin.echoTest(successCallback, errorCallback);
//    window.sqlitePlugin.selfTest(successCallback, errorCallback);
    makeDB();
}
function getplayers(){
    pname1 = document.getElementById("playersname1").value;
    console.log(pname1);
    pname2 = document.getElementById("playersname2").value;
    console.log(pname2);
    pname3 = document.getElementById("playersname3").value;
    console.log(pname3);
    pname4 = document.getElementById("playersname4").value;
    console.log(pname4);
    pname5 = document.getElementById("playersname5").value;
    console.log(pname5);
    pname6 = document.getElementById("playersname6").value;
    console.log(pname6);
    pname7 = document.getElementById("playersname7").value;
    console.log(pname7);
    pname8 = document.getElementById("playersname8").value; 
    console.log(pname8);

    //alert(pname1);
    if(pname1=="" || pname2==""){
        //alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
    }
}
function makeDB(){ // otvaranje baze
    //alert("makeDB");
//({imebaze, lokacija, za koristenje built-in Andorid db klasa, workaround that simply closes and reopens the database file at the end of every transaction that is committed})
    db = window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default', androidDatabaseImplementation: 2, androidLockWorkaround: 1}, successcb, errorcb);
   /* provjera: check
   if (db) {
        alert("db done");
    };
    */
}
function successcb(){
    navigator.notification.alert("DB created Successfully!", null, "Information", "Ok");
//kreiranje tablice ako je baza stvorena
    db.transaction(function(tx) {
        //alert("creating table");
        tx.executeSql('DROP TABLE IF EXISTS player'); // brise tablicu ako postoji
        tx.executeSql("CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text)");     
  });
}
function errorcb(){
    navigator.notification.alert(error, null, "Can't add player into DataBase!\nDatabase closed!", "Ok");
    db.close(); // ako je doslo do greske zatvori bazu
}
function unesi(tx){ // funkcija upisuje podatke u tablicu
    db = window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default', androidDatabaseImplementation: 2, androidLockWorkaround: 1});
    alert("instert into table p1 p2");

    var qry1 = "INSERT INTO player (id, name)VALUES( 1, "+pname1+")";
    //alert(qry1); // prikazuje
    tx.executeSql(qry1);

   
    var qry2 = "INSERT INTO player (id, name)VALUES( 2, "+pname2+")";
    //alert(qry2); //ne prikazuje
    tx.executeSql(qry2);
    
    alert("insert pname3");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 3, '+pname3+')');
    
    alert("insert pname4");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 4, '+pname4+')');
    
    alert("inser pname5");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 5, '+pname5+')');
    
    alert("insert pname6");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 6, '+pname6+')');
    
    alert("inser pname7");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 7, '+pname7+')');
    
    alert("insert pname8");
    tx.executeSql('INSERT INTO player (id, name)VALUES( 8, '+pname8+')');
    else{
        alert("Full capacity of players is not recorded.");
    }
    otvoristr();
}
function otvoristr(){ // funckija provjerava jesu li zadovoljeni uvjeti od 2 igraca minimalno
    
    window.location.assign("wheel.html"); //works on android
}

function getRecords(){
    db = window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default', androidDatabaseImplementation: 2, androidLockWorkaround: 1});
    db.transaction(selectData);
}
function selectData(tx){
    tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);

}
function resultSuccess(response){
    alert("Response : " + response);
}
function resultError(error){
    alert(error);
}