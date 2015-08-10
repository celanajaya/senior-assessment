var express = require('express');
var router = express.Router();
var Message = require('./models/message-model');
module.exports = router;

router.use('/messages');

router.post('/:id', function(req, res){
	Message.create({_id: req.params.id}).exec()
	.then(function(user){
		res.json(user);
	},function(){
		res.sendStatus(404);
	});
});

