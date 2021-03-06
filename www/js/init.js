window.onload=function(){

    document.addEventListener("deviceready", OnDeviceReady, false);
    document.getElementById("submitbtn").addEventListener("click", getplayers, false);
   // document.getElementById("subb").addEventListener("click", getRecords, false);
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
var idDelete, activeNum = 0;
//statusTemp sadržava trenutne vrijednosti aktivnih i neaktivnih botuna (igraca)
var statusTemp = [0, 0, 0, 0, 0, 0, 0, 0];
var pnameNiz =[];
function OnDeviceReady() {
    //navigator.notification.alert("device is ready!");
    makeDB();
    clickable = true;
}
function openDB(){ // otvaranje baze
    return window.sqlitePlugin.openDatabase({name: 'playerDB.db', location: 'default'});
    //navigator.notification.alert("window.SQLitePlugin: " + window.SQLitePlugin);
}
function makeDB(){ 
    db = openDB();
    deleteAll();
   // navigator.notification.alert(db); //object Object
    db.transaction(createDB, errorcb, successcb);
    fillDB();
}
function createDB(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text, status INTEGER)'); 
}
function successcb(){
    console.log("TABLE created Successfully!");    
}
function errorcb(){
    navigator.notification.alert("Can't add player into DataBase!");
}
function fillDB(){

    db = openDB();

    var qry1 = 'INSERT INTO player (id, name, status) VALUES ( 1, "", 0)';
    db.transaction(function (tx){
        tx.executeSql(qry1, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);
   
    var qry2 = 'INSERT INTO player (id, name, status) VALUES ( 2, "", 0)';
    db.transaction(function (tx){
        tx.executeSql(qry2, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);

    var qry3 = 'INSERT INTO player (id, name, status) VALUES( 3, "", 0)';
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
        });  
    }
    var qry4 = 'INSERT INTO player (id, name, status) VALUES( 4, "", 0)';
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = 'INSERT INTO player (id, name, status) VALUES( 5, "", 0)';
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
        });    
    }
    var qry6 = 'INSERT INTO player (id, name, status) VALUES( 6, "", 0)';
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = 'INSERT INTO player (id, name, status) VALUES( 7, "", 0)';
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = 'INSERT INTO player (id, name, status) VALUES( 8, "", 0)';
    if(!(pname8 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry8, [], defaultsuccess, defaultfault);    
        });
    }
}