var User = require('./models/user.model.js');
var Project = require('./models/project.model.js');

module.exports = {
	user: {
		create: function(req, res) {
			User.create(req.body, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		show: function(req, res) {
			User.findOne(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		index: function(req, res) {
			User.find({}, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		update: function(req, res) {
			var response = {};
			User.findById(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					response = r;
				}
			});
			User.findByIdAndUpdate(req.params.id, {$set: req.body}, {upsert: true}, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
		},
		destroy: function(req, res) {
			User.findByIdAndRemove(req.params.id, function(e, r) {
				if (e) {
					res.status(500).json(e);
				} else {
					res.status(200).json(r);
				}
			});
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
	}
};
