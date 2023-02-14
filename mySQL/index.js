const express = require("express");
const app=express();
const bodyParser=require("body-parser")
var mysql = require('mysql');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}))

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"hello"
  });
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get("/",(req,res)=>{
res.render("index");
});
app.post("/push_data",(req,res)=>{
    var name=req.body.push1;
    var fname=req.body.push2;
    var mark=req.body.push3;
    var percent=req.body.push4;

//     var sql = "INSERT INTO save (sl_no , data) VALUES ?";
//     var values=[[,data]];
//     con.query(sql ,[values], function (err, result){
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
    var sql = "INSERT INTO student (sl_no , name, fatherName, marks, percentage) VALUES ?";
    var values=[[,name,fname,mark,percent]];
    con.query(sql ,[values], function (err, result){
    if (err) throw err;
    console.log("1 record inserted");
  });
});
app.listen(3011);