var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {
		first: {type: String, required: true},
		last: {type: String, required: true}
	},
	bio: {type: String, max: 300, min: 0, required: true},
	username: {type: String, required: true, max: 20, min: 4, unique: true},
	password: {type: String, required: true, max: 20, min: 8},
	phone: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	location: {
		city: {type: String, required: true},
		state: {type: String, max: 2, required: true}
	},
	dateJoined: {type: Date, default: Date.now()},
	canInvite: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userSchema);
