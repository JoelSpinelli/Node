module.exports = function(app) {
    var listaProdutos =  (req, res) => {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.lista((err, results) => {
            res.format({
                html: ()=> res.render('produtos/lista', {lista:results}),
                json: () => res.json(results)
            });
        });
        connection.end();
    }

    app.get('/produtos', listaProdutos);
   

    app.get('/produtos/form',  (req, res) => res.render('produtos/form'));

    app.post('/produtos', (req, res) => {
        var produto = req.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(erros, resultados){
            console.log(erros);
            res.redirect('/produtos');
        });
    });
}

