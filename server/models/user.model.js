var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	bio: {type: String, max: 300, min: 0, required: true},
	username: {type: String, required: true, max: 20, min: 4, unique: true},
	password: {type: String, required: true, max: 12, min: 6},
	phone: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	city: {type: String, required: true},
	state: {type: String, max: 2, required: true},
	links: [{
		type: String
	}],
	dateJoined: {type: Date, default: Date.now()},
	canInvite: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
