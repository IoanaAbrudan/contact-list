var http = require('http');
var path = require('path');

var express = require('express');

var app = express();
var server = http.createServer(app);

var mongoose = require('mongoose');

var passport = require('passport');

var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST

app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}));

/**
 * DB Connection
 */
mongoose.connect('mongodb://localhost/contact-list');

/**
 * Mongoose models
 */
var User = require('./models/users');

/**
 * Controllers
 */
var Users = require('./controllers/users');
var Session = require('./controllers/session');

/**
 * Passport init
 */
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/**
 * Routes
 */
app.route('/v1/users')
.get(Users.all)
.post(Users.create);

app.route('/v1/users/:userId')
.get(Users.show)
.put(Users.update)
.delete(Users.destroy);

app.route('/v1/session')
.post(Session.create);

app.route('/v1/session/create')
.post(Session.register);

/**
 * Route Params
 */
app.param('userId', Users.user);

app.use(express.static(path.resolve(__dirname, 'public')));

app.route('/', function (req, res) {
  res.sendFile('index.html');
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});

