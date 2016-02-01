// Modules
var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');

// App Build and Config
var app = express();
app.use(express.static('./public'));
app.use( bodyParser.urlencoded({extended: true}) );
app.set('view engine', 'ejs');

// Routing
var index = require('./routes/index');
app.use('/', index);

// Listening
var port = 8080;
app.listen(port, function(){
  console.log("...listening on port " + port);
});
