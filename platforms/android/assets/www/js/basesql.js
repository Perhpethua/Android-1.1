// DUŽI NAČIN -- RADI
/*document.addEventListener('deviceready', function() { //provjera plugin-a za rad sa bazom
  var db = window.sqlitePlugin.openDatabase({name: 'test.db', location: 'default'});
  db.transaction(function(tr) {
    tr.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
      navigator.notification.alert('Got upperString result: ' + rs.rows.item(0).upperString);
    });
  });
});*/
//document.addEventListener("deviceready", OnDeviceReady, false);
window.onload=function(){

    document.addEventListener("deviceready", OnDeviceReady, false);
    document.getElementById("submitbtn").addEventListener ("click", getplayers, false);
    document.getElementById("subb").addEventListener("click", getRecords, false);

    //document.getElementById("btn0").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn1").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn2").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn3").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn4").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn5").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn6").addEventListener("click", deletePlayer, false); // DELETE PLAYER
    //document.getElementById("btn7").addEventListener("click", deletePlayer, false); // DELETE PLAYER
document.getElementById("btn0").addEventListener("click", deleteBtn, false);
document.getElementById("btn1").addEventListener("click", deleteBtn, false);
document.getElementById("btn2").addEventListener("click", deleteBtn, false);
document.getElementById("btn3").addEventListener("click", deleteBtn, false);
document.getElementById("btn4").addEventListener("click", deleteBtn, false);
document.getElementById("btn5").addEventListener("click", deleteBtn, false);
document.getElementById("btn6").addEventListener("click", deleteBtn, false);
document.getElementById("btn7").addEventListener("click", deleteBtn, false);
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
var idDelete;

function OnDeviceReady() {
    navigator.notification.alert("device is ready!");
    makeDB();
    clickable = true;
}
function openDB(){ // otvaranje baze
    //return window.openDatabase('playerDB', "1.0", "Default", 200000);
    return window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default'});
    //navigator.notification.alert("window.SQLitePlugin: " + window.SQLitePlugin);
}
function makeDB(){ 
    db = openDB();
   // navigator.notification.alert(db); //object Object
    db.transaction(fillDB, errorcb, successcb);

   navigator.notification.alert("User: makeDB");

}
function fillDB(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text)'); 
}
function successcb(){
    navigator.notification.alert("TABLE created Successfully!");    
    //fillDB();
}
function errorcb(){
    navigator.notification.alert("Can't add player into DataBase!");
    //db.close(); // ako je doslo do greske zatvori bazu
}

function defaultsuccess(){
    navigator.notification.alert("default success");
}
function defaultfault(error){
    navigator.notification.alert("default pogreska: " + error);
}
function transactionsucces(){
    navigator.notification.alert("Transaction success");
}
function transactionfault(error){
    navigator.notification.alert("Transaction fault " + error);
}
function otvoristr(){ // funckija otvara wheel.html 
    
    window.location.assign("wheel.html"); //works on android
}

function getRecords(){
    db = openDB();
    db.transaction(function (tx){
        //navigator.notification.alert("getRecords");
        tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);
    }, transactionfault, transactionsucces );
}

function resultSuccess(tx, response){
    navigator.notification.alert("Response : " + response);


    var div = document.getElementById("divResponse");
    var temp = "<table></table>";

    navigator.notification.alert(response.rows.length); //4

    for (var i = 0; i < response.rows.length; i++) { //append all strings
        //alert(response.rows.item(i).id);
        //idDelete = response.rows.item(i).id;
        $(div).append(temp += '<button id="btn' + i + '" onClick="deleteBtn()">' + response.rows.item(i).name + '</button>');
        //temp += "<button>" + response.rows.item(i).name+"</button>";
        //$(div).append(temp += '<button id="btn' + i + '" onClick="tellId(this.id)">' + response.rows.item(i).name + '</button>');
        //navigator.notification.alert(response.rows.item(i).id);
    }
    div.innerHTML = temp;
}
function tellId(clicked_id){
    navigator.notification.alert(clicked_id);
}

function resultError(error){
    navigator.notification.alert("greska e: " + error.message);
}

function getplayers(){
    if(!clickable)return;
    pname1 = document.getElementById("playersname1").value;
    //navigator.notification.alert(pname1);
    pname2 = document.getElementById("playersname2").value;
    //navigator.notification.alert(pname2);
    pname3 = document.getElementById("playersname3").value;
    //navigator.notification.alert(pname3);
    pname4 = document.getElementById("playersname4").value;
    //navigator.notification.alert(pname4);
    pname5 = document.getElementById("playersname5").value;
    //navigator.notification.alert(pname5);
    pname6 = document.getElementById("playersname6").value;
    //navigator.notification.alert(pname6);
    pname7 = document.getElementById("playersname7").value;
    //navigator.notification.alert(pname7);
    pname8 = document.getElementById("playersname8").value; 
    //navigator.notification.alert(pname8);

    //navigator.notification.alert(pname1);
    if(pname1=="" || pname2==""){
        //navigator.notification.alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
    }
}
/*+++++++++++++++++++++               INSERT               ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function unesi(tx){ // funkcija upisuje podatke u tablicu

    db = openDB();
    
    navigator.notification.alert("insert into table p1 p2");

    db.transaction(function (tx){
            tx.executeSql('INSERT INTO player (name) VALUES ("'+pname1+'")', [], defaultsuccess, defaultfault);
        },transactionfault, transactionsucces);
   
    var qry2 = 'INSERT INTO player (id, name) VALUES ( 2, "'+pname2+'")';
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
    //otvara stranicu wheel.html
    //otvoristr();
}
/*+++++++++++++++++++++               DELETE              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function deletePlayer(idDelete){
    db = openDB();
    db.transaction(function (tx, response){
            tx.executeSql('DELETE FROM player WHERE id=?', [idDelete], deleteSuccess, deleteFail);
        },transactionfault, transactionsucces);
}
function deleteSuccess(){
    navigator.notification.alert("delete Success");
    //window.location.reload(true); //reload app da bi se izbrisao redak u tablici
}
function deleteFail(){
    navigator.notification.alert("delete Fail");
    navigator.notification.alert('DELETE error: ' + error.message);
}
function deleteBtn(){
    this.remove();
}