var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	}
});



module.exports = mongoose.model('User', schema);