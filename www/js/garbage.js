garbage :

   var qry3 = "INSERT INTO player (id, name)VALUES( 3, "+pname3+")";
    if(!(pname3 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry3, [], defaultsuccess, defaultfault);  
            });  
    }
    var qry4 = "INSERT INTO player (id, name)VALUES( 4, "+pname4+")";
    if(!(pname4 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry4, [], defaultsuccess, defaultfault);    
        });
    }
    var qry5 = "INSERT INTO player (id, name)VALUES( 5, "+pname5+")";
    if(!(pname5 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry5, [], defaultsuccess, defaultfault);
            });    
    }
    var qry6 = "INSERT INTO player (id, name)VALUES( 6, "+pname6+")";
    if(!(pname6 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry6, [], defaultsuccess, defaultfault);    
        });
    }
    var qry7 = "INSERT INTO player (id, name)VALUES( 7, "+pname7+")";
    if(!(pname7 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry7, [], defaultsuccess, defaultfault);    
        });
    }
    var qry8 = "INSERT INTO player (id, name)VALUES( 8, "+pname8+")";
    if(!(pname8 == "")){
        db.transaction(function (tx){
            tx.executeSql(qry8, [], defaultsuccess, defaultfault);    
        });
    }