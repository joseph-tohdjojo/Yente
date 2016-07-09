var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var ctrl = require('./controllers.js');
var config = require('./config.js');
var githubClientId = config.github.clientId;
var githubClientSecret = config.github.clientSecret;

var app = express();
var port = 4444;

mongoose.connect('mongodb://localhost/yente');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT
passport.use('local', new LocalStrategy( ctrl.passport.authLogin ));
passport.use('signup', new LocalStrategy( ctrl.passport.authSignup ));
passport.serializeUser( ctrl.passport.serialize );
passport.deserializeUser( ctrl.passport.deserialize );

// ENDPOINTS
/* ======= USERS ======= */
app.post('/api/user/login', ctrl.user.login);
app.get('/api/user/remove', ctrl.user.logout);
app.post('/api/user/register', ctrl.user.create);
app.get('/api/user/currentuser', ctrl.user.me);

/* ======= PROJECTS ======= */
app.post('/api/project/', ctrl.project.create);
app.get('/api/project/', ctrl.project.index);
app.get('/api/project/:id', ctrl.project.show);
app.put('/api/project/:id', ctrl.project.update);
app.delete('/api/project/:id',ctrl.project.destroy);

/* ======= IMAGES ======= */
app.post('/api/images/newimage', ctrl.images.postImage);


app.listen(port, function() {
	console.log('Listening on port', port);
});
