module.exports = function(app) {
    app.get('/produtos', function(req, res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'nodetemp.mysql.uhserver.com',
            user: 'jssnodecurso',
            password: 'Curso@1',
            database: 'nodetemp'
        });
        connection.query('select * from livros', function (err, results) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.send(results);
        });
        
        connection.end();
        // consulta
        res.render("produtos/lista");
    })
}

