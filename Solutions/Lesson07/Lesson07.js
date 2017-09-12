    var express = require('express')
  
    var app = express()

	app.get('/search', function(req, res) {
		var id = req.params.id;
		var query = req.query

		var response = [];
      res.send(query);
    })
	app.listen(Number(process.argv[2]));

