var http = require('http');
var fs = require('fs');
var pg = require('pg');
var express = require('express');
var app = express();

// Establish database connection
pg.defaults.ssl = true; //always keep true!!!
var conString = "postgres://ziopwikywoanoj:yO-w-jpnxex5OKPQXLJE0sjgC6@ec2-54-225-64-254.compute-1.amazonaws.com:5432/d9mma6e753ienl"
client = new pg.Client(conString);
client.connect(function(err) {
	//error
	if (err) {
		return console.error('could not connect to postgres', err);
	}
});

app.get('/users', function(req, res) {

	client.query("SELECT * FROM skin.user;", function (err, qres) {
		if (err) {
			console.log("error");
		} else {
			console.log(qres.rows);
			//res.json(qres.rows);
		}
	});

});

var listener = app.listen(process.env.PORT || 3000, function () {
	console.log('Server running on port ' + listener.address().port);
});
