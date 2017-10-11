var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jade =require('jade');
var ejs=require('ejs');
// app.set('view engine', 'jade');
// app.set('view engine', 'ejs');
// app.set('view engine', 'html');



app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.json());
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

UserData =require('./models/userdataanu');
//Connect to Mongoose
mongoose.connect('mongodb://localhost/resume',{ useMongoClient: true });
var db = mongoose.connection;


app.get('/', function(req, res){
	res.render('index.html');//res.sendFile('/Users/anilkumarsheoran/Desktop/resumenew/index.html');//render('/index');
});

app.get('/api/userdata', function(req, res){
UserData.getUserDatas(function(err, userdata){
	if(err){
		throw err;
	}
	res.json(userdata);
});
});
app.post('/api/userdata', function(req, res){
	var userdata = req.body;
UserData.addUserData(userdata, function(err, userdata){
	if(err){
		throw err;
	}
	res.json(userdata);
});
});

	

app.listen(3000);
console.log('Running on port 3000');