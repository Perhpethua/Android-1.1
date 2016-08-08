// DUŽI NAČIN -- RADI
/*document.addEventListener('deviceready', function() { //provjera plugin-a za rad sa bazom
  var db = window.sqlitePlugin.openDatabase({name: 'test.db', location: 'default'});
  db.transaction(function(tr) {
    tr.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
      alert('Got upperString result: ' + rs.rows.item(0).upperString);
    });
  });
});*/
document.addEventListener("deviceready", OnDeviceReady, false);
window.onload=function(){
    document.getElementById("submitbtn").addEventListener ("click", getplayers, false);
    document.getElementById("subb").addEventListener("click", getRecords, false);
}
var db, clickable = true;
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

    makeDB();
    clickable = true;
}
function openDB(){ // otvaranje baze
    //return window.openDatabase('playerDB', "1.0", "Default", 200000);
    return window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default'});
    //alert("window.SQLitePlugin: " + window.SQLitePlugin);
    //db = window.sqlitePlugin.openDatabase({ "name": "snet1.db" });
}
function makeDB(){ 
    db = openDB();
   // alert(db); //object Object
    db.transaction(fillDB, errorcb, successcb);

    alert("User: makeDB");

}
function fillDB(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text)'); 
}
function successcb(){
    alert("TABLE created Successfully!");    
    //fillDB();
}
function errorcb(){
    alert("Can't add player into DataBase!");
    db.close(); // ako je doslo do greske zatvori bazu
}
function unesi(tx){ // funkcija upisuje podatke u tablicu

    db = openDB();
    
    alert("instert into table p1 p2");

    db.transaction(function (tx){
            tx.executeSql('INSERT INTO player (name) VALUES ("'+pname1+'")', [], defaultsuccess, defaultfault);
        },transactionfault, transactionsucces);
   
    var qry2 = 'INSERT INTO player (name) VALUES ("'+pname2+'")';
    db.transaction(function (tx){
        tx.executeSql(qry2, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);

    var qry3 = 'INSERT INTO player (id, name)VALUES( 3, "'+pname3+'")';
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
            });  
    }
    var qry4 = 'INSERT INTO player (id, name)VALUES( 4, "'+pname4+'")';
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = 'INSERT INTO player (id, name)VALUES( 5, "'+pname5+'")';
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
            });    
    }
    var qry6 = 'INSERT INTO player (id, name)VALUES( 6, "'+pname6+'")';
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = 'INSERT INTO player (id, name)VALUES( 7, "'+pname7+'")';
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = 'INSERT INTO player (id, name)VALUES( 8, "'+pname8+'")';
    if(!(pname8 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry8, [], defaultsuccess, defaultfault);    
        });
    }
    //otvoristr();
}
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
        alert("getRecords");
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
    pname1 = document.getElementById("playersname1").value;
    //console.log(pname1);
    pname2 = document.getElementById("playersname2").value;
    //console.log(pname2);
    pname3 = document.getElementById("playersname3").value;
    //console.log(pname3);
    pname4 = document.getElementById("playersname4").value;
    //console.log(pname4);
    pname5 = document.getElementById("playersname5").value;
    //console.log(pname5);
    pname6 = document.getElementById("playersname6").value;
    //console.log(pname6);
    pname7 = document.getElementById("playersname7").value;
    //console.log(pname7);
    pname8 = document.getElementById("playersname8").value; 
    //console.log(pname8);

    //alert(pname1);
    if(pname1=="" || pname2==""){
        //alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
    }
}
