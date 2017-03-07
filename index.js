var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
require('./routes.js')(app);
app.listen(8080, function(){
	console.log("server listening on port: "+port)
})
