function NoticiaDAO(con){
    this.con = con;
}

NoticiaDAO.prototype.buscaTodasNoticias = function(callback){
    this.con.query('select * from noticia' , callback);
}

NoticiaDAO.prototype.buscaNoticia = function(id , callback){
    this.con.query('select * from noticia where noticia_id =' + id , callback );
}

NoticiaDAO.prototype.gravarNoticia = function(objetoNoticia , callback){
    this.con.query('insert into noticia values ?',objetoNoticia , callback);
}

NoticiaDAO.prototype.alterarNoticia  = function(objetoNoticia , callback){

}

module.exports = function(){
    return NoticiaDAO;
}