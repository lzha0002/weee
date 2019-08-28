let express = require('express');
let app = express();

//set up the view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

var db =[];



app.use(express.static('img'));

var filePath = __dirname + "/views/";

app.get("/",function(req,res){
    let fileName = filePath + "index.html";
    res.sendfile(fileName);
});
//make some change
app.get("/newtask",function(req,res){
    let fileName = filePath + "newTask.html";
    res.sendFile(fileName);
});

app.get("/listtasks",function(req,res){
    res.render("listTasks",{mytasks:db});
});

app.post("/listtasks",function(req,res){
    db.push(req.body);
    
    res.render("listTasks",{mytasks:db});

});

app.listen(8080);