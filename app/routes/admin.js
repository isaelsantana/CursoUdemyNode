module.exports = function(app){

    app.get('/admin' , function(req ,res){
        var noticia  = { 
            titulo: "teste"
        }
        res.render("admin/form_add_noticia" , {noticia: noticia});
    });
}