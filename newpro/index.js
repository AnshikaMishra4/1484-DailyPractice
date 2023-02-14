const express = require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    var new_name="anshika"
    const date = new Date();
    res.render('home',{eman:new_name});
    res.render('home',{name:date});
});
// var file;
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// });
// app.post("/save",(req,res)=>{
//     var num1=req.body.num1;
//     var num2=req.body.num2;
//     var c=Number(num1)+Number(num2);
//     if(c==0){
//         file={
//             statusCode:404,
//             add:"Problem"
//         }
//     }else{
//             file={
//                 statusCode:200,
//                 add:c
//             }
//         }
//         res.redirect("/data");
    
    
// });


// app.get("/data",(req,res)=>{
//     res.send(file);
// });

app.listen(3070);