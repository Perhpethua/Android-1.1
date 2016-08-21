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
var pname = new Array(9);

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
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function unesi(tx){ // funkcija upisuje podatke u tablicu

    db = openDB();
    
    alert("insert into table p1 p2");

    for( var i = 0; i < pname.length; i++)
    {
        if(pname[i] == null)
        {
            db.transaction(function (tx){
                tx.executeSql('INSERT INTO player (name) VALUES ("'+pname[i]+'")', [], insertSuccess, insertFail);
            }, transactionfault, transactionsucces);
        }
    }
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++s+++++++++++*/
function insertSuccess(){
    alert('resultSet.insertId: ' + resultSet.insertId);
    alert('resultSet.rowsAffected: ' + resultSet.rowsAffected);
}
function insertFail(){
    alert("INSERT error: " + error);
}
function transactionsucces(){
    alert("Transaction success");
}
function transactionfault(){
    alert("Transaction fault");
}
/*+++++++++++++++++++++++++++ OPEN PAGE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function otvoristr(){ // funckija otvara wheel.html  
    window.location.assign("wheel.html"); //works on android
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++s+++++++++++*/
function getRecords(){
    db = openDB();
    alert("getRecords");
    db.transaction(function (tx){
        tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);
    }, faultSelect, successSelect );
}
function successSelect(){
    alert("successSelect");
}
function faultSelect(){
    alert("faultSelect");
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
                "playersname8"];
alert(names);
    for(var i = 0; i < 8; i++){
        pname[i] = document.getElementById(names[i]).value;
    }
        //alert(pname1);
        //if( ((pname[0] || (pname[1] || pname[2]|| pname[3]|| pname[4]|| pname[5]|| pname[6]|| pname[7]))=="") || () || ())...
    if(pname[0]=="" || pname[1]==""){
        //alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
}

/*
function deletePlayer(){
    openDB();

}*/