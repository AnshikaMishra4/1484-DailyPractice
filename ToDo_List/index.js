var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const date = require(__dirname + "/date.js");




app.set('view engine', 'ejs');
app.post('/addtask', function (req, res) {
    res.render('index')
 });

app.get("/", function(req,res){

    let day = date.getDate();
    res.render("index", {listTitle: day, newListItems: task});

});
var task = ["attend class"];
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.get("/", function(req, res) {    
  res.render("index", { task: task, complete: complete });
});

var complete=[];
app.post("/removetask", function(req, res) {
     var completeTask = req.body.check;

if (typeof completeTask === "string") {
     complete.push(completeTask);
  task.splice(task.indexOf(completeTask), 1);
} else if (typeof completeTask === "object") {
    for (var i = 0; i < completeTask.length; i++) {  
        complete.push(completeTask[i]);
        task.splice(task.indexOf(completeTask[i]), 1);
}
}
   res.redirect("/");
});


app.listen(3121, function () {
  console.log('To Do list on port 3121!')
});