var mySql = require('../models/mySQL.js');

var bodyParser = require('body-parser');

module.exports.index = function(req, res){
  res.render('index', {name: 'Andrew'});
};

module.exports.about = function(req, res){
  res.render('about', {
                        companyName: 'Skill Distillery',
                        phoneNumber: '3031234567',
                        employees: ['Andrew', 'Kris', 'Cole']
                      });
};


//Add a new task
module.exports.contactForm = function(req, res){
	var name = req.body.name;

	mySql.getConnection(function(err, con){
		    con.query('INSERT INTO task (name) VALUES ("' + name +'")');
		    // con.query('INSERT INTO task (name) VALUES ("connection made")');

	});
 res.redirect("/contact");
};

 
module.exports.contact = function(req, res){
	mySql.getConnection(function(err, con){
		con.query('select * from task', function(err, rows){
			if(err) throw err;
			res.render('contact', {allTasks: rows});
		});
	});
};


module.exports.deleteTask = function(req, res){
	var id = req.body.id;
	console.log(id);
	mySql.getConnection(function(err, con){
		con.query('delete from task where id = "' + id + '"');
	});
	res.redirect("/contact");
};

module.exports.updateTask = function(req, res){
	var id = req.body.id;
	var name = req.body.name;
	mySql.getConnection(function(err, con){
		con.query('UPDATE task set name = "' + name + '" where id = ' + id + '');
	})
	res.redirect('/contact');
}
// module.exports.contact = function(req, res){
// 	res.render('contact');
// }
