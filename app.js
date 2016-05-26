var express = require('express');
var app = express();

var path = require('path');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set path to views folder
app.set('views', path.join(__dirname, 'app_server', 'views'));



//set static public file
app.use(express.static(__dirname + '/public'));
//set handlebars as default templeting agent



var handlebars = require('express-handlebars').create({defaultLayout:'../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//include routes
app.use('/', require('./app_server/routes/index.js'));

//custom 404
app.use(function(req, res){
      res.status(404);
      res.send('404');
});

//custom 500
app.use(function(err, req, res, next){
      console.log(err.stack);
      res.status(500);
      res.send('500');
});

app.listen(3000, function(){

  console.log('In class demo server started on port 3000');
});

// var con = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : 'root',
//    database : 'tododb'
// });

//  con.connect(function(err){
//   if(err){
//     console.log('Error connecting to todoDb');
//     return;
//   }
//   console.log('On Startup: MySQL Connection established');
//  });

 //con.query('INSERT INTO task (name) VALUES ("connection made")');