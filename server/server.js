var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var ctrl = require('./controllers.js');

var app = express();
var port = 4444;

mongoose.connect('mongodb://localhost/yente');

app.use(express.static('./public'));
app.use(bodyParser.json());

// ENDPOINTS
// ============================================================
/* ======= USERS ======= */
app.post('/api/user/', ctrl.user.create);
app.get('/api/user/', ctrl.user.index);
app.get('/api/user/:id', ctrl.user.show);
app.put('/api/user/:id', ctrl.user.update);
app.delete('/api/user/:id',ctrl.user.destroy);
/* ======= PROJECTS ======= */
app.post('/api/project/', ctrl.project.create);
app.get('/api/project/', ctrl.project.index);
app.get('/api/project/:id', ctrl.project.show);
app.put('/api/project/:id', ctrl.project.update);
app.delete('/api/project/:id',ctrl.project.destroy);

app.listen(port, function() {
	console.log('Listening on port', port);
});
