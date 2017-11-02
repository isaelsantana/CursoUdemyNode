var mysql  = require('mysql');


var createDB = function(){
    var con=
        mysql.createConnection({
        port : 3306 ,
        database : "teste",
        user : "root",
        password : "1502",
        localAddress : "localhost"
    });

    return con;
}
  


module.exports = function(){
        return createDB;

}


