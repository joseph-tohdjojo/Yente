var User = require('./models/user.model.js');
var Project = require('./models/project.model.js');
var passport = require('passport');
var config = require('./config.js');
var AWS = require('aws-sdk');
AWS.config.update({
	accessKeyId: config.aws.accessKeyId,
	secretAccessKey: config.aws.accessSecretKey,
	region: config.aws.region
});
var s3 = new AWS.S3();

module.exports = {

	passport: {
		authLogin: function(username, password, done) {
			User.findOne({ username: username }, function (err, user) {
				if (err) { return done(err); }
				if (!user) {
					return done(null, false, { message: 'Incorrect username.' });
				}
				if (user.password !== password) {
					return done(null, false, { message: 'Incorrect password.' });
				}
				return done(null, user);
			});
		},
		authSignup: function(username, password, done) {
			User.create({username: username}, function(err, user) {
				if(err) return done(err);
				if(!user) return done(null, false);
			});
		},
		serialize: function(user, done) {
			done(null, user._id);
		},
		deserialize: function(id, done) {
			User.findById(id, function(err, user) {
				done(err, user);
			});
		}
	},

	user: {
		login: function (req, res, next) {
		  passport.authenticate('local', function(err, user, info) {
		    var error = err || info;
		    if (error) return res.json(401, error);

		    req.logIn(user, function(err) {

		      if (err) return res.send(err);
		      res.status(200).json(req.user);
		    });
		  })(req, res, next);
		},
		logout: function(req, res) {
			req.logout();
			res.redirect('/');
		},
		create: function(req, res) {
			var newUser = new User(req.body);
		  newUser.provider = 'local';

		  newUser.save(function(err) {
		    if (err) return res.json(400, err);

		    req.logIn(newUser, function(err) {
		      if (err) return next(err);

		      return res.json(req.user.userInfo);
		    });
		  });
		},
		show: function (req, res, next) {
		  var userId = req.params.id;

		  User.findById(userId, function (err, user) {
		    if (err) return next(new Error('Failed to load User'));

		    if (user) {
		      res.send({ profile: user.profile });
		    } else {
		      res.send(404, 'USER_NOT_FOUND');
		    }
		  });
		},
		me: function(req, res) {
			res.status(200).json(req.user || null);
		}
	},

	project: {
		create: function(req, res) {
			Project.create(req.body, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		show: function(req, res) {
			Project.findOne(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		index: function(req, res) {
			Project.find({}, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		update: function(req, res) {
			var response = {};
			Project.findById(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					response = r;
				}
			});
			Project.findByIdAndUpdate(req.params.id, {$set: req.body}, {upsert: true}, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		destroy: function(req, res) {
			Project.findByIdAndRemove(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		}
	},

	images: {
		postImage: function(req, res) {
			// console.log(s3.endpoint);
			var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

		  // bucketName var below crates a "folder" for each user
		  var bucketName = 'yente/' + req.body.userEmail;
		  var params = {
		    Bucket: bucketName,
		    Key: req.body.imageName,
		    Body: buf,
		    ContentType: 'image/' + req.body.imageExtension,
		    ACL: 'public-read'
		  };
		  s3.upload(params, function (err, data) {
		    if (err) {
					return res.status(500).send(err);
				}


		    // TODO: save data to mongo
				console.log(data);
		  });
		}
	}

};
