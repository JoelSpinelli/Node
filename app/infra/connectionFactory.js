var mysql = require('mysql');

module.exports = function () {
  return mysql.createConnection({
    host: 'nodetemp.mysql.uhserver.com',
    user: 'jssnodecurso',
    password: 'Curso@1',
    database: 'nodetemp'
  });
}