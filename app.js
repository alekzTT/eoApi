const express = require("express"),
    sql = require('mssql'),
    app = express(), 
    port =  80; //env var port
    //bodyParser = require('body-parser');
    let value = "20";
    var Table=require('./models/Table');
    
    
    
app.listen(port, function() {
    console.log("App is running on port "+port);
});



app.get("/",async function(req, res){
        try {
            const result = await sql.query`select * from Tables`;
            res.json(result);
        } catch (err) {
            console.log(err);
        }
});

app.get("/tables",async function(req, res){
            try {
                var result = await Table.getAllTables();
                res.json(result);
                }
             catch (err) {
                console.log(err);
            }
});



