var db = require('./dbconnection');
const sql = require('mssql');
var value = '20';
 
try {
    sql.connect('mssql://sa:1234@localhost/EOSDB')
} catch (err){
    console.log('LALALALALLALA'+err);
}
var Table = {

    getAllTables : async function(){
        //return db.query("Select * from task",callback);
        var result = await sql.query`select * from Tables where TableStatus = ${value}`;
        //console.log(result);
        return result; 
    }
}

module.exports=Table;


