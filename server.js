var express = require('express');
var app = express();
var port = 80;
app.get('/status',function(req,res){
	res.json({
		hostname: req.hostname,
		address: req.ip
	});
});
var server = app.listen(port,function(){
	console.log('PORT='+port);
});
