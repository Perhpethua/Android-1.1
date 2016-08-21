/*document.addEventListener('deviceready', function() { //provjera plugin-a za rad sa bazom
  var db = window.sqlitePlugin.openDatabase({name: 'test.db', location: 'default'});
  db.transaction(function(tr) {
    tr.executeSql("SELECT upper('Test string') AS upperString", [], function(tr, rs) {
      navigator.notification.alert('Got upperString result: ' + rs.rows.item(0).upperString);
    });
  });
});*/
function defaultsuccess(){
    //navigator.notification.alert("default success");
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
function resultError(error){
    navigator.notification.alert("greska e: " + error.message);
}

function getRecords(tx){
    db = openDB();
    db.transaction(function (tx){
        //navigator.notification.alert("getRecords");
        tx.executeSql("SELECT * FROM player", [], resultSuccess, resultError);
    }, transactionfault, transactionsucces );
}

function resultSuccess(tx, response){
    var div = document.getElementById("divResponse");
    var temp = "<table></table>";

    navigator.notification.alert(response.rows.length); //4

    for (var i = 0; i < response.rows.length; i++) { //append all strings
        //alert(response.rows.item(i).id);
        //idDelete = response.rows.item(i).id;
        if(!(response.rows.item(i).name == "")){
            $(div).append(temp += '<button id="btn' + i + '" onClick="deleteBtn(this.id)">' + response.rows.item(i).name + '</button>');
            activeNum++;
            mapa[i][1]=1; 
        }
        //alert(mapa);
//temp += "<button>" + response.rows.item(i).name+"</button>";
//$(div).append(temp += '<button id="btn' + i + '" onClick="tellId(this.id)">' + response.rows.item(i).name + '</button>');
//alert(response.rows.item(i)).name);
    }

    div.innerHTML = temp;
}
function tellId(clicked_id){
    navigator.notification.alert(clicked_id);
}

function getplayers(){
    //if(!clickable)return;
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
    if( pname1=="" || pname2=="" ){
        //navigator.notification.alert("prazna polja");
        navigator.notification.alert("2 players are minimum!", null, "Fill up to continue", "Ok");                
    }else{
        unesi();
        getRecords();
    }
}
/*+++++++++++++++++++++               UPDATE               ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function unesi(tx){ // funkcija update podatke u tablicu

    db = openDB();
    
    navigator.notification.alert("UPDATE table");

    db.transaction(function (tx){
            tx.executeSql('UPDATE player SET name = "'+pname1+'" WHERE id = 1', [], defaultsuccess, defaultfault);
        },transactionfault, transactionsucces);
   
    var qry2 = 'UPDATE player SET name = "'+pname2+'" WHERE id = 2';
    db.transaction(function (tx){
        tx.executeSql(qry2, [], defaultsuccess, defaultfault);
    },transactionfault, transactionsucces);

    var qry3 = 'UPDATE player SET name = "'+pname3+'" WHERE id = 3';
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
            });  
    }
    var qry4 = 'UPDATE player SET name = "'+pname4+'" WHERE id = 4';
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = 'UPDATE player SET name = "'+pname5+'" WHERE id = 5';
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
            });    
    }
    var qry6 = 'UPDATE player SET name = "'+pname6+'" WHERE id = 6';
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = 'UPDATE player SET name = "'+pname7+'" WHERE id = 7';
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = 'UPDATE player SET name = "'+pname8+'" WHERE id = 8';
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
    navigator.notification.alert("delete Success");
    //window.location.reload(true); //reload app da bi se izbrisao redak u tablici
}
function deleteFail(){
    navigator.notification.alert("delete Fail");
    navigator.notification.alert('DELETE error: ' + error.message);
}
function deleteBtn(idBotuna){
    //alert(idBotuna.name);//undetified
    document.getElementById(idBotuna).remove();
    activeNum--;
    checkActive();
}
function checkActive(){
    if(activeNum == 1){
        app.winner();
        window.location.reload(true);
    }
}
