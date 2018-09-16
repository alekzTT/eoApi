const sql = require('mssql');

const config = {
    user: 'sa',
    password: '1234',
    server: 'localhost',
    database: 'EOSDB',
    port: '80'
}

/*
sql.connect('mssql://sa:1234@localhost/EOSDB')
*/

module.exports=config;