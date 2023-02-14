const express=require("express");
const app=express();
const https=require("https");


app.get("/",(req,res)=>{
    const url="https://api.kanye.rest/";
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on("data",(d)=>{
            var data=JSON.parse(d);
            console.log(JSON.parse(d));
           res.send("<h1>"+ data.quote+ "</h1>")
        });
    });
});









app.listen(3080);