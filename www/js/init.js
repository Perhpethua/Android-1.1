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
var idDelete, activeNum = 0; mapa =[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]];

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
    db.transaction(createDB, errorcb, successcb);
    fillDB();
   navigator.notification.alert("User: makeDB");

}
function createDB(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS player(id INTEGER PRIMARY KEY AUTOINCREMENT, name text)'); 
}
function successcb(){
    navigator.notification.alert("TABLE created Successfully!");    
}
function errorcb(){
    navigator.notification.alert("Can't add player into DataBase!");
    //db.close(); // ako je doslo do greske zatvori bazu
}
function fillDB(){

    db = openDB();
    
    navigator.notification.alert("insert into table p1 p2");

    db.transaction(function (tx){
            tx.executeSql('INSERT INTO player (name) VALUES ("")', [], defaultsuccess, defaultfault);
        },transactionfault, transactionsucces);
   
    var qry2 = 'INSERT INTO player (id, name) VALUES ( 2, "")';
    db.transaction(function (tx){
        tx.executeSql(qry2, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);

    var qry3 = 'INSERT INTO player (id, name)VALUES( 3, "")';
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
            });  
    }
    var qry4 = 'INSERT INTO player (id, name)VALUES( 4, "")';
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = 'INSERT INTO player (id, name)VALUES( 5, "")';
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
            });    
    }
    var qry6 = 'INSERT INTO player (id, name)VALUES( 6, "")';
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = 'INSERT INTO player (id, name)VALUES( 7, "")';
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = 'INSERT INTO player (id, name)VALUES( 8, "")';
    if(!(pname8 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry8, [], defaultsuccess, defaultfault);    
        });
    }
}