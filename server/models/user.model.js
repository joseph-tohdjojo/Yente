var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	avatar: {type: String, default: 'http://payload412.cargocollective.com/1/0/7685/10550271/10-08-2015_v4_900v_900.jpg'},
	bio: {type: String, max: 300, min: 0, required: true},
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	github: {type: String, default: 'http://github.com'},
	city: {type: String, required: true},
	state: {type: String, max: 2, required: true},
	dateJoined: {type: Date, default: Date.now()},
	canInvite: {type: Boolean, default: false},
	admin: {type: Boolean, default: false}
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) {
		return next();
	}
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);
