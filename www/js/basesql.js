/*document.addEventListener('deviceready', function() { //provjera plugin-a za rad sa bazom
  var db = window.sqlitePlugin.openDatabase({name: 'test.db', location: 'default'});
  db.transaction(function(tr) {
    tr.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
      navigator.notification.alert('Got upperString result: ' + rs.rows.item(0).upperString);
    });
  });
});*/
function defaultsuccess(){
    console.log("default success");
}
function defaultfault(error){
    console.log("default pogreska: " + error);
}
function transactionsucces(){
    console.log("Transaction success");
}
function transactionfault(error){
    console.log("Transaction fault " + error);
}
function resultError(error){
    console.log("greska e: " + error.message);
}

function getRecords(tx){
    db = openDB();
    db.transaction(function (tx){
        tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);
    }, transactionfault, transactionsucces );
}

function resultSuccess(tx, response){
    var div = document.getElementById("divResponse");
    var temp = "<table></table>";

    console.log(response.rows.length); //8

    for (var i = 0; i < response.rows.length; i++) { //append all strings
        if(!(response.rows.item(i).name == "")){
            $(div).append(temp += '<button id="btn' + i + '" onClick="deleteBtn(this.id)">' + response.rows.item(i).name + '</button>');
            activeNum++;
            //alert(statusTemp);
        }
//temp += "<button>" + response.rows.item(i).name+"</button>";
//$(div).append(temp += '<button id="btn' + i + '" onClick="tellId(this.id)">' + response.rows.item(i).name + '</button>');
//alert(response.rows.item(i)).name);
    }
    div.innerHTML = temp;
}
function getplayers(){
    pname1 = document.getElementById("playersname1").value;
    pname2 = document.getElementById("playersname2").value;
    pname3 = document.getElementById("playersname3").value;
    pname4 = document.getElementById("playersname4").value;
    pname5 = document.getElementById("playersname5").value;
    pname6 = document.getElementById("playersname6").value;
    pname7 = document.getElementById("playersname7").value;
    pname8 = document.getElementById("playersname8").value; 

    pnameNiz = [pname1, pname2, pname3, pname4, pname5, pname6, pname7, pname8];  //spremljena imena igraca
    for(var i = 0; i < pnameNiz.length; i++){
        if(pnameNiz[i] != ""){ //tj upisano je ime igraca
            statusTemp[i] = 1;
        }else{
            statusTemp[i] = 0;
        }
    }
    if( pname1=="" || pname2=="" ){
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
        getRecords();
    }
}
/*+++++++++++++++++++++               UPDATE               ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function unesi(tx){ // funkcija update podatke u tablicu

    db = openDB();
    
    //console.log("UPDATE table");

    var qry1 = 'UPDATE player SET name = "'+pname1+'", status = "'+statusTemp[0]+'" WHERE id = 1';
    db.transaction(function (tx){
        tx.executeSql(qry1, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);
   
    var qry2 = 'UPDATE player SET name = "'+pname2+'", status = "'+statusTemp[1]+'" WHERE id = 2';
    db.transaction(function (tx){
        tx.executeSql(qry2, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);

    var qry3 = 'UPDATE player SET name = "'+pname3+'", status = "'+statusTemp[2]+'" WHERE id = 3';
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
            });  
    }
    var qry4 = 'UPDATE player SET name = "'+pname4+'", status = "'+statusTemp[3]+'" WHERE id = 4';
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = 'UPDATE player SET name = "'+pname5+'", status = "'+statusTemp[4]+'" WHERE id = 5';
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
            });    
    }
    var qry6 = 'UPDATE player SET name = "'+pname6+'", status = "'+statusTemp[5]+'" WHERE id = 6';
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = 'UPDATE player SET name = "'+pname7+'", status = "'+statusTemp[6]+'" WHERE id = 7';
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = 'UPDATE player SET name = "'+pname8+'", status = "'+statusTemp[7]+'" WHERE id = 8';
    if(!(pname8 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry8, [], defaultsuccess, defaultfault);    
        });
    }
}
/*+++++++++++++++++++++               DELETE              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function deletePlayer(idDelete){
    db = openDB();
    db.transaction(function (tx, response){
            tx.executeSql('DELETE FROM player WHERE id=?', [idDelete], deleteSuccess, deleteFail);
        },transactionfault, transactionsucces);
}
function deleteAll(){
    db = openDB();
    db.transaction(function (tx, response){
        tx.executeSql('DELETE FROM player', [], deleteSuccess, deleteFail);
    },transactionfault, transactionsucces);
}
function deleteSuccess(){
    console.log("delete Success");
    //window.location.reload(true); //reload app da bi se izbrisao redak u tablici
}
function deleteFail(){
    console.log('DELETE error: ' + error.message);
}
function deleteBtn(idBotuna){
    //console.log(idBotuna); //btn0, btn1...
    document.getElementById(idBotuna).remove();
//update baze za svaku promjenu statusa
    if(idBotuna == "btn0"){
        statusTemp[0] = 0;
        unesi();
    }else if(idBotuna == "btn1"){
        statusTemp[1] = 0;
        unesi();
    }else if(idBotuna == "btn2"){
        statusTemp[2] = 0;
        unesi();
    }else if(idBotuna == "btn3"){
        statusTemp[3] = 0;
        unesi();
    }else if(idBotuna == "btn4"){
        statusTemp[4] = 0;
        unesi();
    }else if(idBotuna == "btn5"){
        statusTemp[5] = 0;
        unesi();
    }else if(idBotuna == "btn6"){
        statusTemp[6] = 0;
        unesi();
    }else if(idBotuna == "btn7"){
        statusTemp[7] = 0;
        unesi();
    }
    activeNum--;
    //checkActive();
    readDB();
}
//+++++++++++++++++++++               WHO'S THE WINNER              ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function readDB(tx){
    db = openDB();
    db.transaction(function (tx){
        //navigator.notification.alert("getRecords");
        tx.executeSql("SELECT * FROM player", [], checkActive, resultError);
    }, transactionfault, transactionsucces );
}
function checkActive(tx, response){
    for(var i=0; i<statusTemp.length;i++){
        console.log(statusTemp[i]);
        if(statusTemp[i] == 1 && activeNum == 1){
            app.winner(response.rows.item(i).name);
            window.location.reload(true);
        }
    }
}
