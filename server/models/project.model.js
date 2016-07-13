var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, max: 300, required: true},
	projectUrl: {type: String, required: true},
	projectImageUrl: {type: String, required: true},
	dateAdded: {type: Date, default: Date.now()},
	creator: {type: String, ref: 'User', required: true},
	accepted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Project', projectSchema);
