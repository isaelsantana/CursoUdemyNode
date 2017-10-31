var mysql  = require('mysql');
var con  = mysql.createConnection({
        port : 3306 ,
        database : "teste",
        user : "root",
        password : "1502",
        localAddress : "localhost"
    });

module.exports = function(){
    return con;
}


