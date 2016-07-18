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
	// auth: function(req, res, next) {
	// 	if(req.isAuthenticated()) {
	// 		return next();
	// 	}
	// 	res.status(401);
	// },

	passport: {
		authLogin: function(username, password, done) {
		  User.findOne({ username: username })
		  .exec(function(err, user) {
		    if(err) done(err);
		    if(!user) return done(null, false);
		    if(user.verifyPassword(password)) {
					return done(null, user);
				}
		    return done(null, false, { message: 'Invalid login credentials' });
		  });
		}
	},

	user: {
		register: function(req, res, next) {
	    User.create(req.body, function(err, result) {
				console.log(err, result);
	      if(err) return res.status(500).send(err);
	      newUser = result.toObject();
	      newUser.password = null;
				next();
	      // res.status(200).json(newUser);
	    });
	  },
		getAllUsers: function(req, res, next) {
	    User
				.find({})
				// .select('_id')
				.exec(function(err, result) {
		      if (err) return res.status(500).send(err);
		      res.status(200).send(result);
		    });
	  },
		me: function(req, res, next) {
	    if (!req.user) {
				return res.send('Invalid login credentials');
			}
	    req.user.password = null;
	    return res.status(200).json(req.user);
	  },
		update: function(req, res, next) {
	    User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
	      if (err) next(err);
	      res.status(200).send('user updated');
	    });
	  }
	},

	project: {
		addProject: function(req, res) {
			var project = req.body;
			var buf = new Buffer(project.image.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

		  // bucketName var below crates a "folder" for each user
		  var bucketName = 'yente/' + project.image.userEmail;
		  var params = {
		    Bucket: bucketName,
		    Key: project.image.imageName,
		    Body: buf,
		    ContentType: 'image/' + project.image.imageExtension,
		    ACL: 'public-read'
		  };
		  s3.upload(params, function (err, data) {
		    if (err) {
					return res.status(500).send(err);
				}


		    // TODO: save data to mongo
				Project.create({
					title: project.title,
					description: project.description,
					projectUrl: project.projectUrl,
					projectImageUrl: data.Location,
					creator: project.creator,
				}, function(e, r) {
					if(e) {
						res.status(500).json(e);
					} else {

						res.status(200).json(r);
					}
				});
		  });
		},
		getProject: function(req, res) {
			Project.findById({ _id: req.params.id })
				.populate('creator')
				.exec(function(err, project) {
					if(err) {
						res.status(500).json(err);
					} else {
						res.status(200).json(project);
					}
				});
		},
		getAllProjects: function(req, res) {
			Project
				.find({ 'accepted': true })
				.populate({path: 'creator'})
				.exec(function(err, projects) {
					if (err) {
						res.status(500).json(err);
					} else {
						res.status(200).json(projects);
					}
				});
				// .find({})
				// .sort('dateAdded')
				// .limit(20)
				// .exec(function(err, users) {
				// 	if(err) {
				// 		res.send(err);
				// 	} else {
				// 		res.status(200).send(users);
				// 	}
				// });
		},
		getProjectsByOwner: function(req, res) {
			Project.find({ 'creator': req.params.id, 'accepted': true }, function(err, projects) {
				if (err) {
					res.status(500).json(err);
				} else {
					res.status(200).json(projects);
				}
			});
		},
		updateProject: function(req, res) {

		},
		acceptProject: function(req, res) {

		}
	}
};
