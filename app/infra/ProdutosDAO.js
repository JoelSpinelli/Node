function ProdutosBanco(connection) {
  this._connection = connection;
}

ProdutosBanco.prototype.lista = function (callback){
  this._connection.query('select * from livros', callback);
}

ProdutosBanco.prototype.salva = function(produto, callback){
  this._connection.query('insert into livros set ?', produto, callback);
}

module.exports = () => ProdutosBanco;