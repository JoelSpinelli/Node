var mysql = require('mysql');

function createDbConnection() {
  return mysql.createConnection({
    host: 'nodetemp.mysql.uhserver.com',
    user: 'jssnodecurso',
    password: 'Curso@1',
    database: 'nodetemp'
  });
}

module.exports = () => createDbConnection;