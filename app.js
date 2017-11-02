var app = require('./config/server');

var con  = app.app.data.ConectionDB();




con.query("select * from pessoa" , function(err,data){
    data.forEach(function(teste) {
       console.log("Nome : " + teste['nome']);
       console.log("Telefone: " + teste['telefone'] + "\n");

   }, this);
})

app.listen(3000, function(){
    console.log("Rodando Servidor na porta 3000");
});