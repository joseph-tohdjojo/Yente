'use strict';


/*------------------------------------*\
  #DEPENDENCIES
\*------------------------------------*/

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.model.js');
var ctrl = require('./controllers.js');
var config = require('./config.js');





/*------------------------------------*\
  #APP
\*------------------------------------*/

var app = express();

app.use(express.static('./public'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));





/*------------------------------------*\
  #AUTH SETUP
\*------------------------------------*/

var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.send(false);
  return next();
};

var isAdmin = function(req, res, next) {
	if(req.user.admin) {
		return next();
	}
	res.send('Get outta here, man! You don\'t belong here!');
}

app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());





/*------------------------------------*\
  #PASSPORT
\*------------------------------------*/

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, ctrl.passport.authLogin));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});





/*------------------------------------*\
  #DATABASE
\*------------------------------------*/

mongoose.connect(config.mongo.mongoURI, function (err, res) {
	if (err) console.log('Error connecting to database')
	else console.log('Yente database now connected!')
});









/*------------------------------------*\
  #PASSPORT ENDPOINTS
\*------------------------------------*/

app.post('/api/user/login', passport.authenticate('local', {
  successRedirect: '/api/user/getme'
}));
app.get('/api/user/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});





/*------------------------------------*\
  #USER ENDPOINTS
\*------------------------------------*/

app.post('/api/user/register', ctrl.user.register, passport.authenticate('local', {
	successRedirect: '/api/user/getme'
}));
app.get('/api/users', ctrl.user.getAllUsers);
app.get('/api/user/getme', isAuthed, ctrl.user.me);
app.put('/api/user/:_id', isAuthed, ctrl.user.update);





/*------------------------------------*\
  #PROJECT ENDPOINTS
\*------------------------------------*/

app.post('/api/project/addproject', isAuthed, ctrl.project.addProject);
app.get('/api/project/getproject/:id', ctrl.project.getProject);
app.get('/api/project/getprojects/:id', ctrl.project.getProjectsByOwner);
app.get('/api/project/getprojects', ctrl.project.getAllProjects);
app.get('/api/project/updateproject/:id', ctrl.project.updateProject);
app.get('/api/project/acceptproject/:id', isAdmin, ctrl.project.acceptProject);





/*------------------------------------*\
  #LISTEN
\*------------------------------------*/

app.listen(config.port, function() {
	console.log('Yente Express server listening on port', config.port);
});
