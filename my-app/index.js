const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
//app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', /* MySQL User */
    password: '', /* MySQL Password */
    database: 'node_restapi' /* MySQL Database */
  });

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
     
app.get('/api/items',(req, res) => {
    let sqlQuery = "SELECT * FROM items";
    
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
  });
app.get('/api/items/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM items WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
  });

  app.post('/api/items',(req, res) => {
    let data = {title: req.body.title, body: req.body.body};
    
    let sqlQuery = "INSERT INTO items SET ?";
    
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send(apiResponse(results));
    });
  });
  
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}


   
  
app.listen(3010);