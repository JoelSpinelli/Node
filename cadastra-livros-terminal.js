var http = require('http');

var configuracoes = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(configuracoes, res => {
  console.log(res.statusCode);
  res.on('data', body => console.log('Corpo: ' + body));
});

var livro = {
  titulo: 'mais sobre node',
  descricao: 'node, javascript e um pouco sobre http',
  preco: 100
};

client.end(JSON.stringify(livro));
