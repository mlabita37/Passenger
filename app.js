// Modules
var express     =   require('express');
var morgan      =   require('morgan');
var bodyParser  =   require('body-parser');
var mongoose    =   require('mongoose');

// App Build and Config
var app = express();
app.use(express.static('./client/public'));

app.use( bodyParser.urlencoded({extended: true}) );

var mongoPath = 'mongodb://localhost/passenger-01';
mongoose.connect(mongoPath);

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

var indexRouter = require('./server/routes/index');

// Routers
app.use('/', indexRouter);

// Listening
var port = 8080;
app.listen(port, function(){
  console.log("...listening on port " + port);
});
