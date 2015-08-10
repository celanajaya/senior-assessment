var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	subject: {
		type: String,
		default: "No Subject"
	},
	
	body: {
		type: String,
		required: true
	},
	
	from: {
		type: mongoose.Schema.ObjectId, 
		ref: 'User', 
		required: true
	},
	
	to: {
		type: mongoose.Schema.ObjectId, 
		ref: 'User', 
		required: true
	}
});

schema.statics.getAllWhereSender = function(id, next) {
	return this.find({from: id}).populate("from to").exec()
};

schema.methods.truncateSubject = function(num, elips) {
	var tail = '';
	if (elips) tail = "...";
	this.subject = this.subject.slice(0, num) + tail;
	return this;
};
module.exports = mongoose.model('Message', schema);