var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tushar1907',  //your username
  database : 'join_us'         //the name of your db
});

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({exended: true}));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
     var q = 'SELECT COUNT(*) as count FROM users';
     connection.query(q, function (error, results) {
     if (error) throw error;
     var count = results[0].count;
     //var msg = "We have " + results[0].count + " users";
     //res.send(msg);
     res.render('home',{data: count});
     });
});

app.post('/register', function(req,res){
     var person = {email: req.body.email};
     connection.query('INSERT INTO users SET ?', person, function(err, result) {
     console.log(err);
     console.log(result);
     res.redirect("/");
     });
});

app.get('/joke',function(req,res){
    var joke= "this is a joke";
    res.send(joke);
})

app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});


app.listen(8080,function(){
    console.log("Server running on 8080")
})