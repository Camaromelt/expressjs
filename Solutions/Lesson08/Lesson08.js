var express = require('express')
var app = express()
var fs = require('fs');
var file = '';


  app.get('/books', function(req, res) {
  fs.readFile(process.argv[3],  'utf8',(err, data) => {
  	if (err) throw err;
  	file = JSON.parse(data);
  	res.json(file);
	});
      
    })


app.listen(Number(process.argv[2]));